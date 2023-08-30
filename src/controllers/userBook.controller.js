const userBookService = require('../services/userBook.service');

const getUsersBooksId = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userBookService.getUsersBooksId(id);

        if (!user) 
            return res.status(404).json({ message: 'Pessoa não encontrada' });

        return res.status(200).json(user);

    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });        
    }
};

module.exports = {
    getUsersBooksId,
};