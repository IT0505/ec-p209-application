-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: ec_pj
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `account_number` varchar(14) NOT NULL,
  `date_open` date NOT NULL,
  `total_asset` bigint NOT NULL,
  `customer_citizen_identification` varchar(12) NOT NULL,
  PRIMARY KEY (`account_number`),
  KEY `customer_citizen_identification` (`customer_citizen_identification`),
  CONSTRAINT `account_ibfk_1` FOREIGN KEY (`customer_citizen_identification`) REFERENCES `customer` (`customer_citizen_identification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('19110000000001','2021-12-25',94815,'278819433'),('19110000000002','2021-12-25',0,'282819433');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `account_view`
--

DROP TABLE IF EXISTS `account_view`;
/*!50001 DROP VIEW IF EXISTS `account_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `account_view` AS SELECT 
 1 AS `account_number`,
 1 AS `date_open`,
 1 AS `total_asset`,
 1 AS `customer_citizen_identification`,
 1 AS `customer_name`,
 1 AS `customer_address`,
 1 AS `customer_phone`,
 1 AS `date_become_customer`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `credit_card`
--

DROP TABLE IF EXISTS `credit_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credit_card` (
  `credit_card_id` varchar(16) NOT NULL,
  `date_open` date NOT NULL,
  `date_close` date NOT NULL,
  `line_of_credit` bigint NOT NULL,
  `expiration_date` date NOT NULL,
  `loan` bigint NOT NULL,
  `total_loan` bigint NOT NULL,
  `account_number` varchar(14) NOT NULL,
  PRIMARY KEY (`credit_card_id`),
  KEY `credit_card_ibfk_1` (`account_number`),
  CONSTRAINT `credit_card_ibfk_1` FOREIGN KEY (`account_number`) REFERENCES `account` (`account_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credit_card`
--

LOCK TABLES `credit_card` WRITE;
/*!40000 ALTER TABLE `credit_card` DISABLE KEYS */;
INSERT INTO `credit_card` VALUES ('4024007187889372','2021-12-25','2026-12-25',50000000,'2022-01-24',20000,0,'19110000000001');
/*!40000 ALTER TABLE `credit_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `credit_card_view`
--

DROP TABLE IF EXISTS `credit_card_view`;
/*!50001 DROP VIEW IF EXISTS `credit_card_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `credit_card_view` AS SELECT 
 1 AS `credit_card_id`,
 1 AS `date_open`,
 1 AS `date_close`,
 1 AS `expiration_date`,
 1 AS `line_of_credit`,
 1 AS `loan`,
 1 AS `total_loan`,
 1 AS `account_number`,
 1 AS `customer_citizen_identification`,
 1 AS `customer_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_citizen_identification` varchar(12) NOT NULL,
  `customer_name` varchar(40) NOT NULL,
  `customer_address` varchar(40) NOT NULL,
  `customer_phone` varchar(10) NOT NULL,
  `date_become_customer` date NOT NULL,
  `customer_type` varchar(10) NOT NULL,
  PRIMARY KEY (`customer_citizen_identification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('278819433','NHAT HUNG','TPHCM','0939199067','2021-12-25','normal'),('282819433','HUU THANH','TPHCM','0939199067','2021-12-25','normal');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `debit_card`
--

DROP TABLE IF EXISTS `debit_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `debit_card` (
  `debit_card_id` varchar(16) NOT NULL,
  `date_open` date NOT NULL,
  `account_number` varchar(14) NOT NULL,
  `debit_type_code` int NOT NULL,
  PRIMARY KEY (`debit_card_id`),
  KEY `debit_type_code` (`debit_type_code`),
  KEY `debit_card_ibfk_1` (`account_number`),
  CONSTRAINT `debit_card_ibfk_1` FOREIGN KEY (`account_number`) REFERENCES `account` (`account_number`),
  CONSTRAINT `debit_card_ibfk_2` FOREIGN KEY (`debit_type_code`) REFERENCES `debit_type` (`debit_type_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `debit_card`
--

LOCK TABLES `debit_card` WRITE;
/*!40000 ALTER TABLE `debit_card` DISABLE KEYS */;
INSERT INTO `debit_card` VALUES ('4916007464027002','2021-12-25','19110000000001',2),('9687851107538934','2021-12-25','19110000000001',1);
/*!40000 ALTER TABLE `debit_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `debit_card_view`
--

DROP TABLE IF EXISTS `debit_card_view`;
/*!50001 DROP VIEW IF EXISTS `debit_card_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `debit_card_view` AS SELECT 
 1 AS `debit_card_id`,
 1 AS `debit_type_code`,
 1 AS `date_open`,
 1 AS `account_number`,
 1 AS `customer_citizen_identification`,
 1 AS `customer_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `debit_type`
--

DROP TABLE IF EXISTS `debit_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `debit_type` (
  `debit_type_code` int NOT NULL,
  `debit_type_name` varchar(40) NOT NULL,
  PRIMARY KEY (`debit_type_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `debit_type`
--

LOCK TABLES `debit_type` WRITE;
/*!40000 ALTER TABLE `debit_type` DISABLE KEYS */;
INSERT INTO `debit_type` VALUES (1,'inland'),(2,'international');
/*!40000 ALTER TABLE `debit_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `username` varchar(40) NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` varchar(10) NOT NULL,
  `customer_citizen_identification` varchar(12) DEFAULT NULL,
  `staff_citizen_identification` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`username`),
  KEY `login_ibfk_1` (`customer_citizen_identification`),
  KEY `login_ibfk_2` (`staff_citizen_identification`),
  CONSTRAINT `login_ibfk_1` FOREIGN KEY (`customer_citizen_identification`) REFERENCES `customer` (`customer_citizen_identification`),
  CONSTRAINT `login_ibfk_2` FOREIGN KEY (`staff_citizen_identification`) REFERENCES `staff` (`staff_citizen_identification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('admin','$2a$12$LY5P0OOJog.nqJU5sXYnI.9Tkon3s5uIWVpNklCQQFC5hBcs6x5/S','admin',NULL,'277819433'),('huuthanh','$2a$12$aijcHP49tt6yAef.b6IPRexCe2K6limgV2lU8R5F9adxyK0dKg8AG','customer','282819433',NULL),('nhathung','$2a$12$NlJvV51x0bz00a54/ksmAOvGd8lmsqlESl2AnwbWKUhLbmWkd.bSO','customer','278819433',NULL);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `card_type` varchar(40) NOT NULL,
  `date_request` date DEFAULT NULL,
  `processed` int DEFAULT NULL,
  `image_path` varchar(100) DEFAULT NULL,
  `account_number` varchar(14) NOT NULL,
  PRIMARY KEY (`request_id`),
  KEY `request_ibfk_1` (`account_number`),
  CONSTRAINT `request_ibfk_1` FOREIGN KEY (`account_number`) REFERENCES `account` (`account_number`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` VALUES (1,'Debit Card','2021-12-25',1,NULL,'19110000000001'),(2,'International Debit Card','2021-12-25',1,NULL,'19110000000001'),(3,'Credit Card','2021-12-25',1,'images\\Payroll.png','19110000000001');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `request_view`
--

DROP TABLE IF EXISTS `request_view`;
/*!50001 DROP VIEW IF EXISTS `request_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `request_view` AS SELECT 
 1 AS `request_id`,
 1 AS `card_type`,
 1 AS `image_path`,
 1 AS `date_request`,
 1 AS `account_number`,
 1 AS `date_open`,
 1 AS `customer_citizen_identification`,
 1 AS `customer_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `staff_citizen_identification` varchar(12) NOT NULL,
  `staff_name` varchar(40) NOT NULL,
  `staff_address` varchar(40) NOT NULL,
  `staff_phone` varchar(10) NOT NULL,
  `staff_position` varchar(10) NOT NULL,
  PRIMARY KEY (`staff_citizen_identification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES ('277819433','admin','TPHCM','0939199067','admin');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_type`
--

DROP TABLE IF EXISTS `transaction_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_type` (
  `transaction_type_code` int NOT NULL AUTO_INCREMENT,
  `transaction_type_name` varchar(40) NOT NULL,
  PRIMARY KEY (`transaction_type_code`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_type`
--

LOCK TABLES `transaction_type` WRITE;
/*!40000 ALTER TABLE `transaction_type` DISABLE KEYS */;
INSERT INTO `transaction_type` VALUES (1,'deposit by local debit card'),(2,'deposit by international debit card'),(3,'withdraw by local debit card'),(4,'withdraw by international debit card'),(5,'withdraw by credit card'),(6,'pay down credit card'),(7,'recharge from paypal');
/*!40000 ALTER TABLE `transaction_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `transaction_view`
--

DROP TABLE IF EXISTS `transaction_view`;
/*!50001 DROP VIEW IF EXISTS `transaction_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `transaction_view` AS SELECT 
 1 AS `transaction_id`,
 1 AS `debit_card_id`,
 1 AS `credit_card_id`,
 1 AS `total_price`,
 1 AS `date_of_transaction`,
 1 AS `transaction_type_name`,
 1 AS `account_number`,
 1 AS `customer_citizen_identification`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `transaction_id` int NOT NULL AUTO_INCREMENT,
  `date_of_transaction` datetime NOT NULL,
  `total_price` bigint NOT NULL,
  `transaction_type_code` int NOT NULL,
  `debit_card_id` varchar(16) DEFAULT NULL,
  `credit_card_id` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `transaction_type_code` (`transaction_type_code`),
  KEY `transactions_ibfk_2` (`debit_card_id`),
  KEY `transactions_ibfk_3` (`credit_card_id`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`transaction_type_code`) REFERENCES `transaction_type` (`transaction_type_code`),
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`debit_card_id`) REFERENCES `debit_card` (`debit_card_id`),
  CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`credit_card_id`) REFERENCES `credit_card` (`credit_card_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,'2021-12-25 20:45:33',114815,7,'9687851107538934',NULL),(2,'2021-12-25 20:46:48',-20000,4,'4916007464027002',NULL),(3,'2021-12-25 20:47:21',-20000,5,NULL,'4024007187889372');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `account_view`
--

/*!50001 DROP VIEW IF EXISTS `account_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `account_view` AS select `account`.`account_number` AS `account_number`,`account`.`date_open` AS `date_open`,`account`.`total_asset` AS `total_asset`,`customer`.`customer_citizen_identification` AS `customer_citizen_identification`,`customer`.`customer_name` AS `customer_name`,`customer`.`customer_address` AS `customer_address`,`customer`.`customer_phone` AS `customer_phone`,`customer`.`date_become_customer` AS `date_become_customer` from (`account` join `customer`) where (`account`.`customer_citizen_identification` = `customer`.`customer_citizen_identification`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `credit_card_view`
--

/*!50001 DROP VIEW IF EXISTS `credit_card_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `credit_card_view` AS select `credit_card`.`credit_card_id` AS `credit_card_id`,`credit_card`.`date_open` AS `date_open`,`credit_card`.`date_close` AS `date_close`,`credit_card`.`expiration_date` AS `expiration_date`,`credit_card`.`line_of_credit` AS `line_of_credit`,`credit_card`.`loan` AS `loan`,`credit_card`.`total_loan` AS `total_loan`,`account`.`account_number` AS `account_number`,`customer`.`customer_citizen_identification` AS `customer_citizen_identification`,`customer`.`customer_name` AS `customer_name` from ((`credit_card` join `account`) join `customer`) where ((`account`.`account_number` = `credit_card`.`account_number`) and (`account`.`customer_citizen_identification` = `customer`.`customer_citizen_identification`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `debit_card_view`
--

/*!50001 DROP VIEW IF EXISTS `debit_card_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `debit_card_view` AS select `debit_card`.`debit_card_id` AS `debit_card_id`,`debit_card`.`debit_type_code` AS `debit_type_code`,`debit_card`.`date_open` AS `date_open`,`account`.`account_number` AS `account_number`,`customer`.`customer_citizen_identification` AS `customer_citizen_identification`,`customer`.`customer_name` AS `customer_name` from ((`debit_card` join `account`) join `customer`) where ((`account`.`account_number` = `debit_card`.`account_number`) and (`account`.`customer_citizen_identification` = `customer`.`customer_citizen_identification`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `request_view`
--

/*!50001 DROP VIEW IF EXISTS `request_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `request_view` AS select `request`.`request_id` AS `request_id`,`request`.`card_type` AS `card_type`,`request`.`image_path` AS `image_path`,`request`.`date_request` AS `date_request`,`account`.`account_number` AS `account_number`,`account`.`date_open` AS `date_open`,`customer`.`customer_citizen_identification` AS `customer_citizen_identification`,`customer`.`customer_name` AS `customer_name` from ((`account` join `request`) join `customer`) where ((`account`.`account_number` = `request`.`account_number`) and (`account`.`customer_citizen_identification` = `customer`.`customer_citizen_identification`) and (`request`.`processed` = 0)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `transaction_view`
--

/*!50001 DROP VIEW IF EXISTS `transaction_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `transaction_view` AS select `transactions`.`transaction_id` AS `transaction_id`,`transactions`.`debit_card_id` AS `debit_card_id`,`transactions`.`credit_card_id` AS `credit_card_id`,`transactions`.`total_price` AS `total_price`,`transactions`.`date_of_transaction` AS `date_of_transaction`,`transaction_type`.`transaction_type_name` AS `transaction_type_name`,`debit_card`.`account_number` AS `account_number`,`account`.`customer_citizen_identification` AS `customer_citizen_identification` from (((`account` join `debit_card`) join `transactions`) join `transaction_type`) where ((`transactions`.`debit_card_id` = `debit_card`.`debit_card_id`) and (`transactions`.`transaction_type_code` = `transaction_type`.`transaction_type_code`) and (`debit_card`.`account_number` = `account`.`account_number`)) group by `transactions`.`transaction_id` union all select `transactions`.`transaction_id` AS `transaction_id`,`transactions`.`debit_card_id` AS `debit_card_id`,`transactions`.`credit_card_id` AS `credit_card_id`,`transactions`.`total_price` AS `total_price`,`transactions`.`date_of_transaction` AS `date_of_transaction`,`transaction_type`.`transaction_type_name` AS `transaction_type_name`,`credit_card`.`account_number` AS `account_number`,`account`.`customer_citizen_identification` AS `customer_citizen_identification` from (((`account` join `credit_card`) join `transactions`) join `transaction_type`) where ((`transactions`.`credit_card_id` = `credit_card`.`credit_card_id`) and (`transactions`.`transaction_type_code` = `transaction_type`.`transaction_type_code`) and (`credit_card`.`account_number` = `account`.`account_number`)) group by `transactions`.`transaction_id` order by `transaction_id` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-26  1:31:20
