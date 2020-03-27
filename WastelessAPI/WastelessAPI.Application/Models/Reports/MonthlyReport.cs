﻿using System.Collections.Generic;
using System.Linq;
using WastelessAPI.Application.Models.Groceries;
using WastelessAPI.DataAccess;
using WastelessAPI.DataAccess.Repositories;

namespace WastelessAPI.Application.Models.Reports
{
    public class MonthlyReport : IReport
    {
        private WastelessDbContext _context;

        public MonthlyReport(WastelessDbContext context)
        {
            _context = context;
        }

        public IList<GroceryItem> GetReport()
        {
            var reportRepository = new ReportRepository(_context);
            IList<DataAccess.Models.GroceryItem> wastedGroceries = reportRepository.GetMonthlyReport();
            return wastedGroceries.Select(item => new GroceryItem(item)).ToList();
        }
    }
}