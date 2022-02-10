const router = require("express").Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/", pokemonController.viewPokemon);
router.post("/", pokemonController.addPokemon);
router.put("/", pokemonController.editPokemon);
router.delete("/:id", pokemonController.deletePokemon);
module.exports = router;