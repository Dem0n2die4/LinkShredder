using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LinkShredder.Models
{
    public class LinkInfo
    {
        public int id { get; set; }
        public string originalLink { get; set; }
        public string shortLink { get; set; }
        public DateTime creationDate { get; set; }
        public long redirectsCount { get; set; }
    }
}