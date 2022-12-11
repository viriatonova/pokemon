--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pokemon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon (
    id_pk integer NOT NULL,
    name_uq character varying NOT NULL,
    photo_uq character varying NOT NULL
);


ALTER TABLE public.pokemon OWNER TO postgres;

--
-- Name: pokemon_id_pk_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pokemon_id_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pokemon_id_pk_seq OWNER TO postgres;

--
-- Name: pokemon_id_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pokemon_id_pk_seq OWNED BY public.pokemon.id_pk;


--
-- Name: pokemon id_pk; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon ALTER COLUMN id_pk SET DEFAULT nextval('public.pokemon_id_pk_seq'::regclass);


--
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokemon (id_pk, name_uq, photo_uq) FROM stdin;
1	psyduck	http://127.0.0.1:9100/static/psyduck.png
2	ivysaur	http://127.0.0.1:9100/static/ivysaur.png
3	emboar	http://127.0.0.1:9100/static/emboar.png
4	pikachu	http://127.0.0.1:9100/static/pikachu.png
5	cyndaquil	http://127.0.0.1:9100/static/cyndaquil.png
6	grotle	http://127.0.0.1:9100/static/grotle.png
7	grpwlithe	http://127.0.0.1:9100/static/grpwlithe.png
8	fennekin	http://127.0.0.1:9100/static/fennekin.png
9	dragonite	http://127.0.0.1:9100/static/dragonite.png
10	charmander	http://127.0.0.1:9100/static/charmander.png
11	eevee	http://127.0.0.1:9100/static/eevee.png
12	jolten	http://127.0.0.1:9100/static/jolten.png
\.


--
-- Name: pokemon_id_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pokemon_id_pk_seq', 12, true);


--
-- Name: pokemon PK_a7bbb08be8cc821af0ba281f121; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT "PK_a7bbb08be8cc821af0ba281f121" PRIMARY KEY (id_pk);


--
-- PostgreSQL database dump complete
--

