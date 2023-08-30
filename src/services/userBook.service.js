const { User, Book } = require('../models');

const getUsersBooksId = (id) => User.findOne({
    where: { id },
    include: [{ model: Book, as: 'books', through: { attributes: [] } }],
});

module.exports = {
    getUsersBooksId,
}