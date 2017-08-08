using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LinkShredder.Models;

namespace LinkShredderAngular.Controllers
{
    public class LinkController
    {
        private readonly DataContext dataContext;

        public LinkController(DataContext db)
        {
            dataContext = db;
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
            return Guid.NewGuid().ToString().Substring(0,8);
        }

        [HttpGet]
        public string GetFullLink(string guid)
        {
            string result = string.Empty;

            result = dataContext.LinkInfo.Where(w => w.shortLink == guid).First().originalLink;

            return result;
        }
    }
}
