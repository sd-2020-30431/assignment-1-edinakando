using WastelessAPI.Application.Models.Groceries;
using WastelessAPI.DataAccess.Repositories;
using System.Linq;

namespace WastelessAPI.Application.Logic
{
    public class GroceriesLogic
    {
        private readonly GroceriesRepository _groceriesRepository;

        public GroceriesLogic(GroceriesRepository groceriesRepository)
        {
            _groceriesRepository = groceriesRepository;
        }

        public void Save(Groceries groceries)
        {
            _groceriesRepository.Save(new DataAccess.Models.Groceries
            {
                Name = groceries.Name,
                Items = groceries.Items.Select(item =>
                    new DataAccess.Models.GroceryItem
                    {
                        Name = item.Name,
                        Quantity = item.Quantity,
                        Calories = item.Calories,
                        PurchaseDate = item.PurchaseDate,
                        ExpirationDate = item.ExpirationDate,
                        ConsumptionDate = item.ConsumptionDate
                    }).ToList()
            }); ;

        }
    }
}