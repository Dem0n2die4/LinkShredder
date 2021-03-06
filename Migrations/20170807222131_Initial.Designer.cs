﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using LinkShredder.Models;

namespace LinkShredderAngular.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20170807222131_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("LinkShredder.Models.LinkInfo", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("creationDate");

                    b.Property<string>("originalLink");

                    b.Property<long>("redirectsCount");

                    b.Property<string>("shortLink");

                    b.HasKey("id");

                    b.ToTable("LinkInfo");
                });
        }
    }
}
