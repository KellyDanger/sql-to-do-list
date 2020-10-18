CREATE TABLE "to-do" (
"id" serial primary key,
"taskName" varchar(160) NOT NULL,
"completed" boolean default false );

INSERT INTO "to-do" ("taskName") VALUES ('Weekend Challenge Homework');
INSERT INTO "to-do" ("taskName") VALUES ('Dishes');
INSERT INTO "to-do" ("taskName") VALUES ('Singing Practice');
INSERT INTO "to-do" ("taskName") VALUES ('Get auto paint repair kit');
INSERT INTO "to-do" ("taskName") VALUES ('Journal');