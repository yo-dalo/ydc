-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 17, 2026 at 01:01 PM
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
-- Database: `ydc`
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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `achievements`
--

INSERT INTO `achievements` (`Id`, `Image`, `Name`, `Title`, `Description`, `Year`, `Index_No`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, '1766575206448.png', ';;k;flak', 'kf;ka;sf', 'fs;gk;lfg', '2025-12-25 00:00:00', 4, 'inactive', '2025-12-24 11:19:36', '2026-01-02 17:45:42');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`Id`, `Name`, `Email`, `Password`, `Username`, `createdAt`, `updatedAt`) VALUES
(1, 'yo', 'yo@gmail.com', '$2b$12$3BhfCE3i0QqqYidsZi/KA.aWPvLMtgtHd3pAGlYLmcFkoeeBtTbwy', NULL, '2025-12-24 10:50:59', '2025-12-24 10:50:59');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admission`
--

INSERT INTO `admission` (`Id`, `Name`, `Father_Name`, `Mother_Name`, `Email`, `Phone`, `Class`, `DOB`, `City`, `State`, `Gender`, `Admission_Date`, `More_Info`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(19, 'hello', 'jflkjsal', 'hee', 'K@gmil.com', '445555', 'B.E.', '2026-01-17', 'hariyana', 'm garh', 'Male', '2026-01-22', '', 'active', '2026-01-03 04:53:02', '2026-01-03 04:53:02');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admission_open_message`
--

INSERT INTO `admission_open_message` (`Id`, `Title`, `Index_No`, `Message`, `Image`, `Read_More_Url`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, 'jjlfkjsa', 11, 'kfnkajsdkjf', 'asjflkjalskf', 'dlsfjlfkajs', 'inactive', '2025-12-18 16:55:56', '2026-01-02 19:01:00'),
(2, NULL, NULL, NULL, NULL, NULL, 'active', '2025-12-29 09:35:08', '2025-12-29 09:35:08'),
(3, NULL, NULL, NULL, NULL, NULL, 'inactive', '2025-12-29 09:35:12', '2026-01-02 18:35:21'),
(4, NULL, NULL, NULL, NULL, NULL, 'active', '2025-12-29 09:35:15', '2026-01-02 18:37:02'),
(6, 'bvnbvn', 12, 'hkjhkjh', NULL, 'hjhkhkh', 'inactive', '2026-01-02 19:02:00', '2026-01-02 19:02:00');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`Id`, `Name`, `Title`, `Description`, `Date`, `Content`, `Author`, `Image`, `createdAt`, `updatedAt`) VALUES
(2, 'lkajlfjlas', 'kfjalkjsld', 'fkljlkjsalf', '2025-12-10', 'laksjflkjalk', 'klafjlkajf', '1766575148006.png', '2025-12-24 11:19:08', '2025-12-24 11:19:08'),
(3, 'helllo', 'hello', '<figure class=\"table\"><table><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>ljjjljl</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>', '2026-02-19', '<p>helllo</p>', NULL, '1770641323629.png', '2026-02-09 12:48:43', '2026-02-09 12:48:43');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `facility`
--

INSERT INTO `facility` (`Id`, `Index_No`, `Name`, `Title`, `Description`, `Image`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, 'inactive', '2025-12-24 11:24:14', '2025-12-25 17:18:35');

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

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`Id`, `Gallery_Category_Id`, `Image`, `Description`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, 1, '1766678466252.png', 'null', 'active', '2025-12-24 11:37:49', '2025-12-25 16:01:06');

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

--
-- Dumping data for table `gallery_category`
--

INSERT INTO `gallery_category` (`Id`, `Name`, `Title`, `Index_No`, `Date`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, NULL, NULL, NULL, NULL, 'active', '2025-12-24 11:36:24', '2025-12-24 11:36:24');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`Id`, `Image`, `Name`, `Roll`, `Description`, `Read_More_Url`, `Index_No`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, '1767532143882.png', 'RAO BAHADUR SINGH', 'Chaerman', 'We offer design that :works for you - Our studio designs interios with functionality and aesthetics in mind We Cre  Our diverse student community brings energy, creativity, and enthusiasm to campus life. They actively participate in academics, cultural events, and extracurricular activities. Every student is encouraged to grow intellectually and personally.', 'hello', 11, 'active', '2025-12-24 11:37:57', '2026-01-16 10:26:51'),
(2, '1768557779010.png', 'Karan Sing Yaduv', 'Voice Chairman', 'We offer design that :works for you - Our studio designs interios with functionality and aesthetics in mind We Cre  Our diverse student community brings energy, creativity, and enthusiasm to campus life. They actively participate in academics, cultural events, and extracurricular activities. Every student is encouraged to grow intellectually and personally.', 'helllo', 11, 'active', '2025-12-27 17:37:52', '2026-01-16 10:05:50'),
(3, '1768561150331.jpg', 'Pardeep ', 'Dircter', 'We offer design that :works for you - Our studio designs interios with functionality and aesthetics in mind We Cre  Our diverse student community brings energy, creativity, and enthusiasm to campus life. They actively participate in academics, cultural events, and extracurricular activities. Every student is encouraged to grow intellectually and personally.', 'null', 3, 'active', '2026-01-16 10:58:56', '2026-01-16 10:59:52');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`Id`, `Index_No`, `Is_Important`, `Title`, `Description`, `Date`, `Name`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 'jbmnnn', 'kljfljlaj', '2025-12-25', 'aljljlfak', 'active', '2025-12-24 11:38:05', '2025-12-27 18:02:33'),
(2, 122, 0, 'aaj ka peper hindi ka h ', 'hindi ke perper me ye aayga ', '2026-01-01', 'english  ka peper ', 'active', '2025-12-27 18:14:02', '2025-12-30 05:40:07'),
(6, 1, 1, 'Annual Examination Notice', 'सभी छात्रों को सूचित किया जाता है कि वार्षिक परीक्षा दिनांक 12 से प्रारंभ हो रही है। सभी छात्र अपने प्रवेश पत्र के साथ समय पर परीक्षा केंद्र पर उपस्थित हों।', '2026-01-12', 'Annual Exam 2026', 'active', '2026-01-04 18:11:59', '2026-01-04 18:11:59'),
(7, 1, 1, 'परीक्षा सूचना', 'सभी छात्रों को सूचित किया जाता है कि दिनांक 12 से वार्षिक परीक्षा प्रारंभ हो रही है। समय पर उपस्थित होना अनिवार्य है।', '2026-01-12', 'Annual Exam', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(8, 2, 0, 'प्रवेश पत्र', 'परीक्षा के लिए प्रवेश पत्र विद्यालय कार्यालय से प्राप्त करें। बिना प्रवेश पत्र परीक्षा में बैठने की अनुमति नहीं होगी।', '2026-01-10', 'Admit Card', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(9, 3, 0, 'परीक्षा समय', 'परीक्षा प्रतिदिन प्रातः 8 बजे से प्रारंभ होगी। सभी छात्र 30 मिनट पहले पहुंचें।', '2026-01-12', 'Exam Timing', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(10, 4, 1, 'अनुशासन निर्देश', 'परीक्षा के दौरान अनुशासन बनाए रखें। नकल करते पाए जाने पर कड़ी कार्रवाई होगी।', '2026-01-12', 'Exam Rules', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(11, 5, 0, 'स्टेशनरी सूचना', 'छात्र अपनी स्टेशनरी स्वयं लाएं। विद्यालय से कोई सामग्री उपलब्ध नहीं कराई जाएगी।', '2026-01-11', 'Stationery', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(12, 6, 0, 'आईडी कार्ड', 'परीक्षा केंद्र में प्रवेश के लिए विद्यालय आईडी कार्ड अनिवार्य है।', '2026-01-12', 'ID Card', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(13, 7, 1, 'अवकाश सूचना', 'परीक्षा अवधि के दौरान किसी भी प्रकार का अवकाश मान्य नहीं होगा।', '2026-01-12', 'Leave Notice', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(14, 8, 0, 'परिणाम सूचना', 'परीक्षा परिणाम परीक्षा समाप्ति के 15 दिन बाद घोषित किया जाएगा।', '2026-02-05', 'Result Notice', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(15, 9, 0, 'उत्तर पुस्तिका', 'उत्तर पुस्तिका साफ-सुथरी लिखें और निर्धारित समय में जमा करें।', '2026-01-12', 'Answer Sheet', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(16, 10, 1, 'महत्वपूर्ण सूचना', 'परीक्षा संबंधी किसी भी जानकारी के लिए विद्यालय कार्यालय से संपर्क करें।', '2026-01-12', 'Important Notice', 'active', '2026-01-04 18:24:55', '2026-01-04 18:24:55'),
(17, 1, 1, 'Official Examination Guidelines 2026', 'Detailed Rules for Examinations:\n1. Students must arrive 30 minutes before the start.\n2. No electronic gadgets allowed.\n3. Mandatory ID card display.\n4. Follow the seating plan strictly.\n[...Yahan aap 200 lines tak ka data repeat kar sakte hain...]\nFull Policy: Section A: Attendance requirements must be 75% minimum. Section B: Use of unfair means will lead to rustication. Section C: Answer sheets must be signed by the invigilator. Section D: Leaving the hall before 1 hour is prohibited. Section E: Re-evaluation process will open 5 days post results. Section F: Special provisions for medical cases. Section G: Emergency exits locations. Section H: Stationery requirements. Section I: Mask and health protocols. Section J: Handling of digital answer scripts. Section K: Feedback mechanism for question paper errors.', '2026-01-04', 'Controller of Exams', 'active', '2026-01-04 18:32:29', '2026-01-04 18:32:29'),
(18, 2, 1, 'Campus Recruitment Policy & Terms', 'Placement Drive Protocol:\n1. Registration on the portal is mandatory for all final year students.\n2. Resume must be in the college-approved format only.\n3. Formal attire is compulsory for all interview rounds.\n4. Students must maintain a clean disciplinary record.\n5. Once placed, a student cannot apply for other companies unless the package difference is >40%.\n6. Punctuality is key; latecomers will be disqualified.\n7. Pre-placement talks (PPT) are mandatory to attend.\n8. Feedback forms must be filled post-interview.\n9. Offer letters will be routed through the T&P Cell.\n10. Any direct communication with HR is strictly forbidden.\n[Repeated for 200 lines of legal and procedural text...]', '2026-01-05', 'Placement Head', 'active', '2026-01-04 18:32:29', '2026-01-04 18:32:29'),
(19, 1, 1, 'Final Semester Exam Schedule', 'The timetable for the Spring 2026 final examinations is now available on the portal.', '2026-01-05', 'Admin', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(20, 2, 0, 'Winter Break Extension', 'The college will remain closed until January 10th due to extreme weather conditions.', '2026-01-02', 'Registrar', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(21, 3, 1, 'Placement Drive: TechCorp', 'TechCorp is visiting for a recruitment drive for Final Year CS/IT students on Jan 15.', '2026-01-04', 'Placement Cell', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(22, 4, 0, 'Annual Sports Meet 2026', 'Registrations are open for the Annual Athletics Meet scheduled for next month.', '2026-01-06', 'Sports Dept', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(23, 5, 1, 'Scholarship Application Deadline', 'Last date to submit applications for the Merit-cum-Means scholarship is Jan 20.', '2026-01-07', 'Student Affairs', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(24, 6, 0, 'Workshop on AI & ML', 'A three-day hands-on workshop on Artificial Intelligence begins this Friday.', '2026-01-08', 'HOD CS', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(25, 7, 0, 'Library Books Return', 'Students are requested to return overdue library books by Jan 12 to avoid fines.', '2026-01-04', 'Librarian', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(26, 8, 1, 'Hostel Fee Payment', 'Final notice for payment of even semester hostel fees without late charges.', '2026-01-03', 'Accounts', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(27, 9, 0, 'Guest Lecture by Dr. Aris', 'Join us for a talk on Renewable Energy in the Main Auditorium at 10:00 AM.', '2026-01-09', 'Physics Dept', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(28, 10, 0, 'Cultural Fest: Aurora 2026', 'Auditions for the dance and music teams for Aurora 2026 start next week.', '2026-01-10', 'Cultural Club', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(29, 11, 1, 'Revised COVID-19 Guidelines', 'Updated safety protocols for campus entry and classroom attendance.', '2026-01-02', 'Admin', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(30, 12, 0, 'Blood Donation Camp', 'The Red Cross Society is organizing a blood donation camp in the North Wing.', '2026-01-12', 'NSS Unit', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(31, 13, 0, 'Internship Fair 2026', 'Over 30 companies are visiting for summer internship hiring on Jan 25.', '2026-01-11', 'Placement Cell', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(32, 14, 1, 'Convocation Ceremony', 'Details regarding the 15th Annual Convocation and gown collection.', '2026-01-15', 'Registrar', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(33, 15, 0, 'New Cafeteria Menu', 'We are excited to announce a new healthy menu starting this Monday.', '2026-01-11', 'Canteen Mgr', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(34, 16, 0, 'Coding Competition: Hack-It', 'Register for the 24-hour intra-college hackathon by Jan 18.', '2026-01-13', 'Tech Society', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(35, 17, 1, 'Identity Card Collection', 'Freshmen can collect their permanent ID cards from the admin office.', '2026-01-05', 'Admin', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(36, 18, 0, 'Holiday Notice: Republic Day', 'The college will remain closed on Jan 26 in observance of Republic Day.', '2026-01-20', 'Admin', 'active', '2026-01-04 18:41:55', '2026-01-04 18:41:55'),
(37, 19, 0, 'Seminar on Mental Health', '<p>An interactive session on managing exam stress with Dr. Sarah Smith.&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><figure class=\"table\"><table><tbody><tr><td>1</td><td>helllo</td><td>123</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>2</td><td>helo</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>4</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>kya hall h aalpka&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>5</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>', '2026-01-14', 'Counseling Unit', 'active', '2026-01-04 18:41:55', '2026-02-09 14:30:37');

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

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`Id`, `Name`, `Pages_Category_Id`, `Page_Data`, `Is_Active`, `Index_No`, `createdAt`, `updatedAt`) VALUES
(2, 'hello', 1, 'page data ', 'inactive', 122, '2025-12-27 12:33:43', '2026-01-16 12:08:07'),
(3, 'page 1', 1, 'helllo m ye btana chya hu ke', 'active', 12, '2025-12-27 14:06:42', '2025-12-27 14:06:42'),
(4, 'hello', 2, 'hello pahu page 3 ', 'active', 1222, '2025-12-27 14:24:55', '2025-12-27 14:24:55'),
(5, 'aall information', 3, '<blockquote><ol><li><h2><strong>helloboy</strong></h2></li><li><strong>kya halo&nbsp;</strong></li><li><strong>boy lm lho boy klua krna h aab</strong></li></ol></blockquote>', 'active', 1, '2025-12-30 17:50:42', '2026-02-09 16:01:26');

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

--
-- Dumping data for table `pages_category`
--

INSERT INTO `pages_category` (`Id`, `Index_No`, `Name`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, 1233, 'hhjk', 'active', '2025-12-24 11:38:55', '2025-12-27 12:33:01'),
(2, 122, 'hello', 'active', '2025-12-27 14:24:14', '2025-12-27 14:24:14'),
(3, -389, 'yadhu rig', 'active', '2025-12-30 17:48:46', '2025-12-30 17:48:46');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `poster`
--

INSERT INTO `poster` (`Id`, `Index_No`, `Url`, `Image`, `Name`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(3, 1, 'http://localhost:5173/school-achievements', '1766837623968.jpeg', 'name ', 'inactive', '2025-12-27 12:13:27', '2026-01-16 12:30:15'),
(5, 22, 'hello', '1766837897371.jpeg', 'helllo', 'active', '2025-12-27 12:18:17', '2025-12-27 12:18:17'),
(7, -1, 'hfkjh', '1767085861573.png', 'gfgh', 'active', '2025-12-30 09:11:01', '2025-12-30 09:11:01'),
(9, 22, '#', '1767529731281.jpeg', NULL, 'active', '2026-01-04 12:28:51', '2026-01-04 12:28:51'),
(10, NULL, NULL, '1767529749410.jpeg', NULL, 'inactive', '2026-01-04 12:29:09', '2026-01-16 12:23:29');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `school_info`
--

INSERT INTO `school_info` (`Id`, `Experience`, `Students`, `Teachers`, `Awards`, `School_Name`, `Short_Name`, `Logo_Url`, `Favicon_Url`, `Motto`, `Established_Year`, `Address`, `City`, `State`, `Pin_Code`, `Alternate_Phone`, `Email`, `Website`, `Academic_Year_Start`, `Academic_Year_End`, `Youtube_Url`, `Linkedin_Url`, `Instagram_Url`, `Twitter_Url`, `Board_Affiliation`, `Board_Affiliation_Number`, `Latitude`, `Longitude`, `Contact_Person_Name`, `Contact_Person_Position`, `Contact_Person_Phone`, `Medium_Of_Instruction`, `Display_Order`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, '2225', 12255555, 3251112, '2255222555', NULL, NULL, NULL, NULL, '45555', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-12-23 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'active', '2025-12-24 11:43:29', '2025-12-27 19:01:26');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `school_welcome_message`
--

INSERT INTO `school_welcome_message` (`Id`, `Title`, `Message`, `Read_More_Url`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, NULL, NULL, NULL, 'active', '2025-12-24 11:44:25', '2025-12-24 11:44:25'),
(2, 'wellodcome asseg', NULL, NULL, 'active', '2026-01-01 15:27:31', '2026-01-01 15:27:31');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `toper`
--

INSERT INTO `toper` (`Id`, `Student_Name`, `Index_No`, `Image`, `Marks_Percentage`, `Description`, `Year`, `Gender`, ` Class`, `Father_name`, `Rank`, `Is_Active`, `createdAt`, `updatedAt`) VALUES
(1, 'Dinash', 11, '1768546733276.jpg', '120', 'jdlkjlfkj', '1', 'male', 'helo', 'Kuldeep Kumar', '1', 'active', '2025-12-27 19:49:46', '2026-01-16 07:04:11'),
(2, 'Rahul', 11, '1768546700561.jpeg', '120', 'jdlkjlfkj', '1', 'male', 'helo', 'Kuldeep kumar', '1', 'active', '2025-12-27 19:49:46', '2026-01-16 07:03:13'),
(3, 'vivek', 11, '1768546676871.jpeg', '120', 'jdlkjlfkj', '1', 'male', 'helo', 'vinod kumar', '3', 'active', '2025-12-27 19:49:46', '2026-01-16 07:02:17'),
(4, 'Diya ', 11, '1768546040172.jpeg', '120', 'jdlkjlfkj', '1', 'female', 'helo', 'Siva Sing', '2', 'active', '2025-12-27 19:49:46', '2026-01-16 07:05:05');

-- --------------------------------------------------------

--
-- Table structure for table `toper_category`
--

CREATE TABLE `toper_category` (
  `Id` int(11) NOT NULL,
  `Toper_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `toper_category`
--

INSERT INTO `toper_category` (`Id`, `Toper_id`, `createdAt`, `updatedAt`) VALUES
(1, 13, '2025-12-24 11:43:04', '2026-01-01 18:33:10');

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
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achievements`
--
ALTER TABLE `achievements`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `admission`
--
ALTER TABLE `admission`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `admission_open_message`
--
ALTER TABLE `admission_open_message`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `facility`
--
ALTER TABLE `facility`
  ADD PRIMARY KEY (`Id`);

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
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`Id`);

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
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `quick_link`
--
ALTER TABLE `quick_link`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `school_info`
--
ALTER TABLE `school_info`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `school_welcome_message`
--
ALTER TABLE `school_welcome_message`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `toper`
--
ALTER TABLE `toper`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `toper_category`
--
ALTER TABLE `toper_category`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `useful_link`
--
ALTER TABLE `useful_link`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `achievements`
--
ALTER TABLE `achievements`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admission`
--
ALTER TABLE `admission`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `admission_open_message`
--
ALTER TABLE `admission_open_message`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `facility`
--
ALTER TABLE `facility`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gallery_category`
--
ALTER TABLE `gallery_category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pages_category`
--
ALTER TABLE `pages_category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `poster`
--
ALTER TABLE `poster`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `quick_link`
--
ALTER TABLE `quick_link`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `school_info`
--
ALTER TABLE `school_info`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `school_welcome_message`
--
ALTER TABLE `school_welcome_message`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `toper`
--
ALTER TABLE `toper`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `toper_category`
--
ALTER TABLE `toper_category`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `useful_link`
--
ALTER TABLE `useful_link`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `gallery_ibfk_1` FOREIGN KEY (`Gallery_Category_Id`) REFERENCES `gallery_category` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `pages`
--
ALTER TABLE `pages`
  ADD CONSTRAINT `pages_ibfk_1` FOREIGN KEY (`Pages_Category_Id`) REFERENCES `pages_category` (`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
