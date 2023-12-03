const BeearStyleModel = require('../models/BeearStyleModel');

class BeerStyleController {

    async create(req, res){
        try{
            const beerStyleData = req.body;
            console.log(beerStyleData)

            const cervejaExiste =  await BeearStyleModel.findAll({
                where: {
                    stylebeer: beerStyleData.stylebeer
                }
            });

            if(cervejaExiste.length > 0){
                return res.json({
                    msg: 'Cerveja já cadastrado na base de dados'
                });
            }


            console.log(beerStyleData);

            const beerstyle = await BeearStyleModel.create(beerStyleData)

            res.json({
                msg: 'Cerveja inserido com sucesso!',
                beerstyle: beerstyle
            });
        }catch(erro){
            console.log(erro)
            res.json({
                msg: 'erro ao inserir a cerveja'
            });
        }
    }

    async read(req, res){
        try{
            const beerstyle = await BeearStyleModel.findAll();
            res.json({
                msg: 'Cerveja recuperada com sucesso!',
                beerstyle: beerstyle
            });
        }catch(error){
            console.log(error);
            res.json({
                msg: 'erro ao buscar a cerveja'
            });
        }
    }

    async findBeerStyleByTemperature(temperature) {
        const beerstyle = await BeearStyleModel.findAll();
        const beersWithDiff = beerstyle.map((beer) => {
            const avgTemperature = (Number(beer.maxtemperature) + Number(beer.mintemperature)) / 2;
            const diff = Math.abs(avgTemperature - temperature);
            return {
              beer,
              diff,
            };
        });

        const sortedBeers = beersWithDiff.sort((a, b) => a.diff - b.diff);
        const closestDiff = sortedBeers[0].diff;
        const closestBeers = sortedBeers.filter((beer) => beer.diff === closestDiff).map((beer) => beer.beer);
    
        const sortedClosestBeers = closestBeers.sort((a, b) => {
          const result = a.stylebeer.localeCompare(b.stylebeer);
          if (result === 0) {
            return a.stylebeer.localeCompare(b.stylebeer);
          }
          return result;
        });

        return sortedClosestBeers[0];
        
    }

    update(){

    }

    async deleteAll(req, res) {
        try {
          await BeearStyleModel.destroy({
            where: {},
            truncate: true
          });
      
          res.json({
            msg: 'Todas as cervejas foram deletadas com sucesso!'
          });
        } catch (error) {
          console.log(error);
          res.json({
            msg: 'Erro ao deletar as cervejas'
          });
        }
      }
      

    delete(){

    }
}

module.exports = new BeerStyleController();