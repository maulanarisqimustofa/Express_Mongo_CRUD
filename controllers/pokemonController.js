const Pokemon = require("../models/Pokemon");

module.exports = {
    viewPokemon: async(req, res) => {
        try {
            var sorting = { number: 1 };
            const pokemon = await Pokemon.find().
            sort(sorting);
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");
            const alert = { message: alertMessage, status: alertStatus };
            res.render("index", {
                pokemon,
                alert,
                title: "CRUD",
            });
        } catch (error) {
            res.redirect("/pokemon")
        }
    },
    addPokemon: async(req, res) => {
        try {
            const { number, name, types } = req.body;
            await Pokemon.create({ number, name, types });
            req.flash("alertMessage", "Success add pokemon");
            req.flash("alertStatus", "success");
            res.redirect("/pokemon");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");

            res.redirect("/pokemon")
        }
    },
    editPokemon: async(req, res) => {
        try {
            const { id, number, name, types } = req.body;
            const pokemon = await Pokemon.findOne({ _id: id });
            pokemon.number = number;
            pokemon.name = name;
            pokemon.types = types;
            await pokemon.save();
            req.flash("alertMessage", "Success edit pokemon");
            req.flash("alertStatus", "success");
            res.redirect("/pokemon");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");

            res.redirect("/pokemon")
        }
    },
    deletePokemon: async(req, res) => {
        try {
            const { id } = req.params;
            const pokemon = await Pokemon.findOne({ _id: id });
            await pokemon.remove();
            req.flash("alertMessage", "Success delete pokemon");
            req.flash("alertStatus", "success");
            res.redirect("/pokemon");
        } catch (error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");

            res.redirect("/pokemon")
        }
    },
};