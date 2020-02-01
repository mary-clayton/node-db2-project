
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'D3GR54DF38H63CDF3', make: 'Ford', model: '2019', mileage: '12000', transmissionType: 'Automatic', titleStatus: 'Clean'},
        {VIN: 'R4DR3SG2F74CC4XZ4', make: 'Toyota', model: '2001', mileage: '120000', transmissionType: 'Automatic', titleStatus: 'Clean'},
        {VIN: 'FD3IR429FJ804FVC9', make: 'Chevy', model: '2006', mileage: '68000', transmissionType: 'Manual', titleStatus: 'Savage'}
      ]);
    });
};
