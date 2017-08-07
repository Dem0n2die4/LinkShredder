using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LinkShredder.Models;

namespace LinkShredderAngular.Controllers
{
    public class HomeController : Controller
    {
        private readonly DataContext dataContext;

        public HomeController(DataContext db)
        {
            dataContext = db;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        [HttpGet]
        public string GetShortLink(string link)
        {
            LinkInfo linkInfo = new LinkInfo
            {
                originalLink = link,
                shortLink = ShredLink(link),
                redirectsCount = 0,
                creationDate = DateTime.Now
            };

            dataContext.Add(linkInfo);
            dataContext.SaveChanges();

            return linkInfo.shortLink;
        }

        [HttpGet]
        public List<LinkInfo> GetLinksStatistics()
        {
            var result = dataContext.LinkInfo.Where(a => a.redirectsCount >= 0).ToList();
            return result;
        }

        private string ShredLink(string link)
        {
            return "test short link!";
        }

    }
}
