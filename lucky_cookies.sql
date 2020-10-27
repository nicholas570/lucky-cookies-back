-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: lucky_cookies
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cookie`
--

DROP TABLE IF EXISTS `cookie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cookie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookie`
--

LOCK TABLES `cookie` WRITE;
/*!40000 ALTER TABLE `cookie` DISABLE KEYS */;
INSERT INTO `cookie` VALUES (1,'Pépites de chocolat','Cookie aux pépites de chocolat noir et fleur de sel',2.50,'pepitesDeChocolat.jpg'),(2,'Noix du Brésil','Cookie aux noix du Brésil et chocolat blanc',3.20,'noixDuBresil.jpg'),(3,'Thé matcha','Cookie aux thé matcha et chocolat blanc',2.50,'theMatcha.jpg'),(4,'Macadamia','Cookie aux noix de macadamia et vanille',2.70,'macadamia.jpg'),(5,'Chocolat & beurre de cacahuète','Cookie au beurre de cacahuète et pépites de chocolat',3.00,'beurreDeCacahuete.jpg'),(6,'Noix et cannelle','Cookie aux noix torréfiées et parfumé à la cannelle',3.00,'noix.jpg'),(7,'Sarrasin','Cookie à la farine de sarrasin et caramel',2.80,'sarrasin.jpg'),(8,'Chocolat & tonka','Cookie 100 % chocolat noir et parfumé à la fève de tonka',2.80,'tonka.jpg'),(9,'Sesame','Cookie aux graines de sésames et caramel',3.00,'sesame.jpg'),(10,'Cranberry','Cookie aux cranberries et chocolat blanc',3.00,'cranberry.jpg'),(11,'Noix de pécan','Cookie aux noix de pécan et caramel',3.20,'pecan.jpg');
/*!40000 ALTER TABLE `cookie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookie_ingredients`
--

DROP TABLE IF EXISTS `cookie_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cookie_ingredients` (
  `cookie_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL,
  PRIMARY KEY (`cookie_id`,`ingredient_id`),
  KEY `FK_ingredient` (`ingredient_id`),
  CONSTRAINT `FK_cookie` FOREIGN KEY (`cookie_id`) REFERENCES `cookie` (`id`),
  CONSTRAINT `FK_ingredient` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookie_ingredients`
--

LOCK TABLES `cookie_ingredients` WRITE;
/*!40000 ALTER TABLE `cookie_ingredients` DISABLE KEYS */;
INSERT INTO `cookie_ingredients` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(7,2),(1,3),(2,3),(3,3),(4,3),(5,3),(6,3),(7,3),(8,3),(9,3),(10,3),(11,3),(1,4),(2,4),(3,4),(4,4),(5,4),(6,4),(7,4),(8,4),(9,4),(10,4),(11,4),(1,5),(5,5),(7,5),(5,6),(2,7),(3,7),(8,7),(10,7),(3,8),(4,9),(8,10),(8,11),(5,12),(6,13),(6,14),(7,16),(11,16),(1,17),(9,18),(7,19),(2,20),(3,22),(4,22),(9,22),(10,23),(11,24);
/*!40000 ALTER TABLE `cookie_ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredient`
--

DROP TABLE IF EXISTS `ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredient` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredient`
--

LOCK TABLES `ingredient` WRITE;
/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
INSERT INTO `ingredient` VALUES (1,'Farine bio certifiée'),(2,'Farine de sarrasin bio certifiée'),(3,'Beurre bio certifié'),(4,'Oeufs bio du GAEC de Blancheville'),(5,'Fleur de sel'),(6,'Chocolat noir 75%'),(7,'Chocolat blanc'),(8,'Thé matcha'),(9,'Noix de macadamia'),(10,'Fève de Tonka'),(11,'Cacao 100%'),(12,'Beurre de cacahuète maison'),(13,'Noix'),(14,'Cannelle'),(15,'Fruits confits'),(16,'Caramel'),(17,'Pépites de chocolat'),(18,'Graines de sésame'),(19,'Graines de sarrasin'),(20,'Noix du Brésil'),(21,'Cacahuète'),(22,'Vanille'),(23,'Cranberry'),(24,'Noix de pécan');
/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-27 16:27:59
