-- --------------------------------------------------------

--
-- Table structure for table `todolist`
--

CREATE TABLE IF NOT EXISTS `todolist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(225) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `todolist`
--

INSERT INTO `todolist` (`id`, `value`, `active`) VALUES (1, 'todo list number one', 1), (2, 'some toto list from docker', 1);

-- --------------------------------------------------------