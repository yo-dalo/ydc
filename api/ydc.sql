-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 01, 2026 at 09:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ydc-multy-school`
--

-- --------------------------------------------------------

--
-- Table structure for table `achievements`
--

CREATE TABLE `achievements` (
  `Id` int(11) NOT NULL,
  `Image` varchar(500) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Year` datetime NOT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `Id` int(11) NOT NULL,
  `Name` varchar(30) DEFAULT NULL,
  `Email` varchar(30) DEFAULT NULL,
  `Password` text NOT NULL,
  `Username` varchar(30) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admission`
--

CREATE TABLE `admission` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Father_Name` varchar(255) DEFAULT NULL,
  `Mother_Name` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Class` varchar(100) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `City` varchar(100) DEFAULT NULL,
  `State` varchar(100) DEFAULT NULL,
  `Gender` varchar(20) DEFAULT NULL,
  `Admission_Date` date DEFAULT NULL,
  `More_Info` text DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admission_open_message`
--

CREATE TABLE `admission_open_message` (
  `Id` int(11) NOT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Message` text DEFAULT NULL,
  `Image` varchar(500) DEFAULT NULL,
  `Read_More_Url` varchar(500) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Title` varchar(200) NOT NULL,
  `Description` text DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Content` text DEFAULT NULL,
  `Author` varchar(100) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Sub_domain` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `facility`
--

CREATE TABLE `facility` (
  `Id` int(11) NOT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Image` varchar(500) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `Id` int(11) NOT NULL,
  `Gallery_Category_Id` int(11) DEFAULT NULL,
  `Image` varchar(500) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gallery_category`
--

CREATE TABLE `gallery_category` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `Id` int(11) NOT NULL,
  `Image` varchar(500) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Roll` varchar(100) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Read_More_Url` varchar(500) DEFAULT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `Id` int(11) NOT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Is_Important` tinyint(1) DEFAULT 0,
  `Title` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `Id` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Pages_Category_Id` int(11) DEFAULT NULL,
  `Page_Data` text DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `Index_No` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pages_category`
--

CREATE TABLE `pages_category` (
  `Id` int(11) NOT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `poster`
--

CREATE TABLE `poster` (
  `Id` int(11) NOT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Url` varchar(500) DEFAULT NULL,
  `Image` varchar(500) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quick_link`
--

CREATE TABLE `quick_link` (
  `Id` int(11) NOT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Url` varchar(500) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `school_info`
--

CREATE TABLE `school_info` (
  `Id` int(11) NOT NULL,
  `Experience` varchar(255) DEFAULT NULL,
  `Students` int(11) DEFAULT NULL,
  `Teachers` int(11) DEFAULT NULL,
  `Awards` varchar(255) DEFAULT NULL,
  `School_Name` varchar(255) DEFAULT NULL,
  `Short_Name` varchar(255) DEFAULT NULL,
  `Logo_Url` varchar(500) DEFAULT NULL,
  `Favicon_Url` varchar(500) DEFAULT NULL,
  `Motto` text DEFAULT NULL,
  `Established_Year` datetime DEFAULT NULL,
  `Address` text DEFAULT NULL,
  `City` varchar(100) DEFAULT NULL,
  `State` varchar(100) DEFAULT NULL,
  `Pin_Code` varchar(20) DEFAULT NULL,
  `Alternate_Phone` varchar(20) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `Academic_Year_Start` datetime DEFAULT NULL,
  `Academic_Year_End` datetime DEFAULT NULL,
  `Youtube_Url` varchar(500) DEFAULT NULL,
  `Linkedin_Url` varchar(500) DEFAULT NULL,
  `Instagram_Url` varchar(500) DEFAULT NULL,
  `Twitter_Url` varchar(500) DEFAULT NULL,
  `Board_Affiliation` varchar(255) DEFAULT NULL,
  `Board_Affiliation_Number` varchar(255) DEFAULT NULL,
  `Latitude` varchar(50) DEFAULT NULL,
  `Longitude` varchar(50) DEFAULT NULL,
  `Contact_Person_Name` varchar(255) DEFAULT NULL,
  `Contact_Person_Position` varchar(255) DEFAULT NULL,
  `Contact_Person_Phone` varchar(20) DEFAULT NULL,
  `Medium_Of_Instruction` varchar(255) DEFAULT NULL,
  `Display_Order` int(11) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `school_welcome_message`
--

CREATE TABLE `school_welcome_message` (
  `Id` int(11) NOT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Message` text DEFAULT NULL,
  `Read_More_Url` varchar(500) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `toper`
--

CREATE TABLE `toper` (
  `Id` int(11) NOT NULL,
  `Student_Name` varchar(255) DEFAULT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Image` varchar(500) DEFAULT NULL,
  `Marks_Percentage` varchar(10) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Year` varchar(18) NOT NULL,
  `Gender` enum('male','female') NOT NULL,
  ` Class` varchar(17) NOT NULL,
  `Father_name` varchar(20) NOT NULL,
  `Rank` varchar(20) NOT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `toper_category`
--

CREATE TABLE `toper_category` (
  `Id` int(11) NOT NULL,
  `Toper_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `useful_link`
--

CREATE TABLE `useful_link` (
  `Id` int(11) NOT NULL,
  `Index_No` int(11) DEFAULT NULL,
  `Url` varchar(500) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Is_Active` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Branch_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achievements`
--
ALTER TABLE `achievements`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `admission`
--
ALTER TABLE `admission`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `admission_open_message`
--
ALTER TABLE `admission_open_message`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `facility`
--
ALTER TABLE `facility`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Gallery_Category_Id` (`Gallery_Category_Id`);

--
-- Indexes for table `gallery_category`
--
ALTER TABLE `gallery_category`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Pages_Category_Id` (`Pages_Category_Id`);

--
-- Indexes for table `pages_category`
--
ALTER TABLE `pages_category`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `poster`
--
ALTER TABLE `poster`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `quick_link`
--
ALTER TABLE `quick_link`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `school_info`
--
ALTER TABLE `school_info`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `school_welcome_message`
--
ALTER TABLE `school_welcome_message`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `toper`
--
ALTER TABLE `toper`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `toper_category`
--
ALTER TABLE `toper_category`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- Indexes for table `useful_link`
--
ALTER TABLE `useful_link`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Branch_Id` (`Branch_Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `achievements`
--
ALTER TABLE `achievements`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `admission`
--
ALTER TABLE `admission`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `admission_open_message`
--
ALTER TABLE `admission_open_message`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `facility`
--
ALTER TABLE `facility`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery_category`
--
ALTER TABLE `gallery_category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pages_category`
--
ALTER TABLE `pages_category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `poster`
--
ALTER TABLE `poster`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quick_link`
--
ALTER TABLE `quick_link`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `school_info`
--
ALTER TABLE `school_info`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `school_welcome_message`
--
ALTER TABLE `school_welcome_message`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `toper`
--
ALTER TABLE `toper`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `toper_category`
--
ALTER TABLE `toper_category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `useful_link`
--
ALTER TABLE `useful_link`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `achievements`
--
ALTER TABLE `achievements`
  ADD CONSTRAINT `achievements_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `admission`
--
ALTER TABLE `admission`
  ADD CONSTRAINT `admission_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `admission_open_message`
--
ALTER TABLE `admission_open_message`
  ADD CONSTRAINT `admission_open_message_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `facility`
--
ALTER TABLE `facility`
  ADD CONSTRAINT `facility_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `gallery_ibfk_1` FOREIGN KEY (`Gallery_Category_Id`) REFERENCES `gallery_category` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `pages`
--
ALTER TABLE `pages`
  ADD CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`Pages_Category_Id`) REFERENCES `pages_category` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `poster`
--
ALTER TABLE `poster`
  ADD CONSTRAINT `poster_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `school_info`
--
ALTER TABLE `school_info`
  ADD CONSTRAINT `school_info_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `school_welcome_message`
--
ALTER TABLE `school_welcome_message`
  ADD CONSTRAINT `school_welcome_message_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `toper`
--
ALTER TABLE `toper`
  ADD CONSTRAINT `toper_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `toper_category`
--
ALTER TABLE `toper_category`
  ADD CONSTRAINT `toper_category_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `useful_link`
--
ALTER TABLE `useful_link`
  ADD CONSTRAINT `useful_link_ibfk_1` FOREIGN KEY (`Branch_Id`) REFERENCES `branch` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;