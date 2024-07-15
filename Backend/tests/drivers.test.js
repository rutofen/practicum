const {
  createDriver,
  getDriverById,
  updateDriver,
  deleteDriver,
  getAllDrivers,
} = require('../modules/driversModuls');

describe('Driver Functions', () => {
  test('Create a new driver', async () => {
    const newDriver = await createDriver('TestDriver', 8);
    expect(newDriver.name).toBe('TestDriver');
    expect(newDriver.worktime).toBe(8);
  });

  test('Get driver by ID', async () => {
    const newDriver = await createDriver('TestDriver', 8);
    const driver = await getDriverById(newDriver.id);
    expect(driver.name).toBe('TestDriver');
    expect(driver.worktime).toBe(8);
  });

  test('Update driver details', async () => {
    const newDriver = await createDriver('TestDriver', 8);
    const updatedDriver = await updateDriver(newDriver.id, 'UpdatedDriver', 10);
    expect(updatedDriver.name).toBe('UpdatedDriver');
    expect(updatedDriver.worktime).toBe(10);
  });

  test('Delete a driver', async () => {
    const newDriver = await createDriver('TestDriver', 8);
    const deletedDriverId = await deleteDriver(newDriver.id);
    expect(deletedDriverId).toBe(newDriver.id);
  });

  test('Get all drivers', async () => {
    const drivers = await getAllDrivers();
    expect(drivers.length).toBeGreaterThan(0);
  });
});
