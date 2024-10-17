const express = require('express');
const app = express();

// Sample dataset of products
const products = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
}));

// API Endpoint for pagination
app.get('/api/products', (req, res) => {
  // Get limit and offset from query parameters or set defaults
  const limit = parseInt(req.query.limit) || 10; // default limit of 10
  const offset = parseInt(req.query.offset) || 0; // default offset of 0


  const paginatedProducts = products.slice(offset, offset + limit);


  const total = products.length;
  const remaining = total - (offset + limit) > 0 ? total - (offset + limit) : 0;

  // Send the paginated results back to the client
  res.json({
    total: total,
    limit: limit,
    offset: offset,
    remaining: remaining,
    data: paginatedProducts,
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));