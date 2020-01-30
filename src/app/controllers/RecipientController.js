import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async create(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      number: Yup.string(),
      street_line1: Yup.string().required(),
      street_line2: Yup.string(),
      state: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Failed' });
    }

    const {
      id,
      name,
      number,
      street_line1,
      street_line2,
      state,
      zipcode,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      number,
      street_line1,
      street_line2,
      state,
      zipcode,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      number: Yup.string(),
      street_line1: Yup.string(),
      street_line2: Yup.string(),
      state: Yup.string(),
      zipcode: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Failed' });
    }

    const recipient = await Recipient.findByPk(req.params.recipientId);
    if (!recipient) {
      return res.status(404).json({ error: 'Invalid Recipient' });
    }

    const {
      id,
      name,
      number,
      street_line1,
      street_line2,
      state,
      zipcode,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      number,
      street_line1,
      street_line2,
      state,
      zipcode,
    });
  }
}

export default new RecipientController();
