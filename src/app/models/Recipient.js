import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        number: Sequelize.STRING,
        street_line1: Sequelize.STRING,
        street_line2: Sequelize.STRING,
        state: Sequelize.STRING,
        zipcode: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }
}

export default Recipient;
