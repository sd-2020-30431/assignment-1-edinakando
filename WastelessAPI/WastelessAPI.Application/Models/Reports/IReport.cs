using System.Collections.Generic;
using WastelessAPI.Application.Models.Groceries;

namespace WastelessAPI.Application.Models.Reports
{
    public interface IReport
    {
        public IList<GroceryItem> GetReport();
    }

    public enum ReportType
    {
        Weekly,
        Monthly
    }
}
