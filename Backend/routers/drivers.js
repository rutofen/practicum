const express = require('express');
const router = express.Router();
const { createDriver, getDriverById, updateDriver, deleteDriver ,getAllDrivers } = require('../modules/driversModuls'); 

// POST
router.post('/', async (req, res) => {
  const { name, workTime } = req.body;
  try {
    const newDriver = await createDriver(name, workTime);
    res.status(201).json(newDriver);
  } catch (err) {
    console.error('Error creating driver:', err);
    res.status(500).json({ error: 'Failed to create driver' });
  }
});

// GET 

router.get('/', async (req, res) => {
  try {
    const drivers = await getAllDrivers();
    res.json(drivers);
  } catch (err) {
    console.error('Error fetching drivers:', err);
    res.status(500).json({ error: 'Failed to fetch drivers' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const driver = await getDriverById(id);
    if (!driver) {
      res.status(404).json({ error: 'Driver not found' });
    } else {
      res.json(driver);
    }
  } catch (err) {
    console.error('Error fetching driver:', err);
    res.status(500).json({ error: 'Failed to fetch driver' });
  }
});

// PUT 
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, workTime } = req.body;
  try {
    const updatedDriver = await updateDriver(id, name, workTime);
    if (!updatedDriver) {
      res.status(404).json({ error: 'Driver not found' });
    } else {
      res.json(updatedDriver);
    }
  } catch (err) {
    console.error('Error updating driver:', err);
    res.status(500).json({ error: 'Failed to update driver' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteDriver(id);
    res.status(204).end();
  } catch (err) {
    console.error('Error deleting driver:', err);
    res.status(500).json({ error: 'Failed to delete driver' });
  }
});

module.exports = router;
