const Event = require('../models/Event');

let memoryEvent = {
  coupleNames: 'Sarah & Alexander',
  weddingDate: new Date(Date.now() + 145 * 24 * 60 * 60 * 1000).toISOString(),
  venue: 'The Grand Chateau & Gardens',
  city: 'Paris, France',
  budgetGoal: 35000,
  theme: 'Romantic Luxury Gold'
};

exports.getEventDetails = async (req, res) => {
  try {
    const event = await Event.findOne();
    res.json(event || memoryEvent);
  } catch (error) {
    res.json(memoryEvent);
  }
};

exports.updateEventDetails = async (req, res) => {
  try {
    let event = await Event.findOne();
    if (event) {
      Object.assign(event, req.body);
      await event.save();
    } else {
      event = new Event(req.body);
      await event.save();
    }
    res.json(event);
  } catch (error) {
    memoryEvent = { ...memoryEvent, ...req.body };
    res.json(memoryEvent);
  }
};
