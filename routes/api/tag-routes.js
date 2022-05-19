const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Find all tags and associated Product data
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {model: Product, through: ProductTag}
      ]
    });

    res.status(200).json(tags);
  }
  catch (err) {
    console.log(`Error in getting tags: ${err}`);
    res.status(500).json(err);
  }
});

// Find a single tag by its `id` and its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {model: Product, through: ProductTag}
      ]
    });

    if (tag) {
      res.status(200).json(tag);
    }
    else {
      res.status(404).json({message: 'No tag found with the id provided!'});
    }
  }
  catch (err) {
    console.log(`Error in getting tag by id: ${err}`);
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tagName = req.body.tag_name;

    if (tagName) {
      const tagCreated = await Tag.create(
        {tag_name: tagName}
      );

      res.status(200).json(tagCreated);
    }
    else {
      res.status(404).json({message: 'Request body must contain tag_name'});
    }
  }
  catch (err) {
    console.log(`Error in creating a tag: ${err}`);
    res.status(500).json(err);
  }
});

// Update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagName = req.body.tag_name;

    if (tagName) {
      const updatedTag = await Tag.update(
        {tag_name: tagName},
        {
          where: {
            id: req.params.id
          }
        }
      );

      if (!updatedTag[0]) {
        res.status(404).json({message: 'No tag found with the id provided!'});
      }
      else {
        res.status(200).json(updatedTag);     
      }
    }
    else {
      res.status(404).json({message: 'Request body must contain tag_name'});
    }
  }
  catch (err) {
    console.log(`Error in updating tag by its id: ${err}`);
    res.status(500).json(err);
  }
});

// Delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    // Deletes all references to this tag from product_tag table
    await ProductTag.destroy({
      where: {
        tag_id: req.params.id
      }
    });

    const deletedTag = await Tag.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!deletedTag) {
      res.status(404).json({message: 'No tag found with the id provided!'});
    }
    else {
      res.status(200).json(deletedTag);
    }
  }
  catch (err) {
    console.log(`Error in deleting a tag: ${err}`);
    res.status(500).json(err);
  }
});

module.exports = router;