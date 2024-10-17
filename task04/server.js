const express = require('express');
const mongoose = require('mongoose');
const Event = require('./models/Event');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/event_booking', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.post('/book-event/:eventId', async (req, res) => {
    const { eventId } = req.params;

    try {
        const session = await mongoose.startSession();
        session.startTransaction();

        const event = await Event.findById(eventId).session(session);
        if (event.booked) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({ error: 'Event already booked' });
        }

        event.booked = true;
        await event.save({ session });

        await session.commitTransaction();
        session.endSession();

        res.status(200).json({ message: 'Event booked successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
