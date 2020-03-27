
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using WastelessAPI.DataAccess.Models;

namespace WastelessAPI.DataAccess.Repositories
{
    public class ReportRepository
    {
        private readonly WastelessDbContext _context;

        public ReportRepository(WastelessDbContext context)
        {
            _context = context;
        }

        public IList<GroceryItem> GetWeeklyReport()
        {
            return _context.GroceryItems.Where(item => _IsWaste(item) && _IsFromCurrentWeek(item.ExpirationDate)).ToList();
        }

        public IList<GroceryItem> GetMonthlyReport()
        {
            return _context.GroceryItems.Where(item => _IsWaste(item) && _IsFromCurrentMonth(item.ExpirationDate)).ToList();
        }

        private Boolean _IsFromCurrentWeek(DateTime date)
        {
            var calendar = System.Globalization.DateTimeFormatInfo.CurrentInfo.Calendar;
            var currentDate = DateTime.Now;
            var dateOfWeek = date.Date.AddDays(-1 * (int)calendar.GetDayOfWeek(date));
            var currentOfWeek = currentDate.Date.AddDays(-1 * (int)calendar.GetDayOfWeek(currentDate));

            return dateOfWeek == currentOfWeek;
        }

        private Boolean _IsFromCurrentMonth(DateTime date)
        {
            var currentDate = DateTime.Now;
            var currentMonthStartDate = new DateTime(currentDate.Year, currentDate.Month, 1);
            var currentMonthEndDate = currentMonthStartDate.AddMonths(1).AddDays(-1);
            return date > currentMonthStartDate && date < currentMonthEndDate;
        }
     
        private Boolean _IsWaste(GroceryItem grocery)
        {
            return grocery.ConsumptionDate == null  && grocery.ExpirationDate < DateTime.Now;
        }
    }
}
