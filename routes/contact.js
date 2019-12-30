const router = require('express').Router();
const contactRepo = require('../repo/contact');
const contac = new contactRepo();
var corsOptions = {
    origin: 'http://127.0.0.1:5500/',
    optionsSuccessStatus: 200 
  }


router.post('/', async (req, res) => {
    try {
        const { body } = req;
        await contac.create(body)
        res.json({ success: true })
    }
    catch (err) {
        res.json({ fail: true });
    }

});
router.get('/', async (req, res) => {

    try {
        const contact = await contac.getAll();
        res.json(contact);
    }
    catch (err) {
        res.json([])
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const contact = await contac.getById(id);
        res.json(contact);

    } catch (err) {
        res.json({ err: err.message })
    }


});
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { body } = req
        const updated = await contac.Update(id,body);
        res.json(updated)
    } catch (err) {
        res.json({ err: err.message })
    }


});

router.delete('/:id',async(req,res) =>
{
try {
    const { id } = req.params
    const  deleted = await contac.Delete(id);
    res.json(deleted);
}
 catch (err)
  {
    res.json({err: err.message})
}

});

module.exports = router;