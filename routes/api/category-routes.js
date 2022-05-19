const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Find all categories and its associated Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        { model: Product }
      ]
    });
    res.status(200).json(categories);
  }
  catch (err) {
    console.log(`Error in finding all categories: ${err}`);
    res.status(500).json(err);
  }
});

// Find one category and associated products by category `id`
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [
        { model: Product }
      ]
    });

    if (category) {
      res.status(200).json(category);
    }
    else {
      res.status(404).json({ message: "No category found with that id!" });
    }
  }
  catch (err) {
    console.log(`Error in finding category by id: ${err}`);
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const categoryName = req.body.category_name;
    if (!categoryName) {
      return res.status(404).json('Request body must contain category_name');
    }

    const categoryAdded = await Category.create(
      { category_name: categoryName }
    );

    res.status(200).json(categoryAdded);
  }
  catch (err) {
    console.log(`Error in creating a new category: ${err}`);
    res.status(500).json(err);
  }
});

// Update a category `id` value
router.put('/:id', async (req, res) => {
  try {
    if (req.body && req.body.category_name) {
      const updatedCategory = await Category.update(
        {
          category_name: req.body.category_name
        },
        {
          where: {
            id: req.params.id
          }
        }
      );

      if (!updatedCategory[0]) {
        res.status(404).json({message: 'No category with this id!'});
      }
      else {
        res.status(200).json(updatedCategory);
      }
    }
    else {
      res.status(404).json('Request body must contain category_name');
    }
  }
  catch (err) {
    console.log(`Error in updating category by id: ${err}`);
    res.status(500).json(err);
  }
});

// Delete a category based on `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!deletedCategory) {
      res.status(404).json({message: 'No category with that id!'});
    }
    else {
      res.status(200).json(deletedCategory);
    }
  }
  catch (err) {
    console.log(`Error in deleting a category by its id: ${err}`);
    res.status(500).json(err);
  }
});

module.exports = router;