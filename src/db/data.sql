--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4 (Debian 15.4-2.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: kysely_migration; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.kysely_migration (name, "timestamp") FROM stdin;
20231004T154603-create-users-table	2023-10-14T16:14:35.242Z
20231006T214350-add-created-at-to-users	2023-10-14T16:14:35.247Z
\.


--
-- Data for Name: kysely_migration_lock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.kysely_migration_lock (id, is_locked) FROM stdin;
migration_lock	0
\.


--
-- PostgreSQL database dump complete
--

