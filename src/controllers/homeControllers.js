import { render } from 'ejs';
import db from '../models/index';

const Home = async (req, res) => {
    try {
        const data = await db.User.findAll();
        console.log(data);
        console.log("**********************************");
        return res.render('Home_View', {
            data: JSON.stringify(data)
        });
    } catch (e) {

        console.log(e);
    }
}

module.exports = {
    Home
}