-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-05-19 16:39:10
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bdnews`
--

-- --------------------------------------------------------

--
-- 表的结构 `entertainment`
--

CREATE TABLE IF NOT EXISTS `entertainment` (
  `newsid` int(11) NOT NULL COMMENT '自动增长',
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='娱乐新闻';

--
-- 转存表中的数据 `entertainment`
--

INSERT INTO `entertainment` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(1, '张学友巡演600万一场 上海演出商3600万接6场？', 'http://t11.baidu.com/it/u=http://img1.gtimg.com/ent/pics/hv1/33/126/2071/134698938.png&fm=36', '在这60个城市中，上海这座时髦的城市又牛逼est了：今明两年，张学友在上海各举行3场，也就是6场。', '2016-05-19');

-- --------------------------------------------------------

--
-- 表的结构 `hundred`
--

CREATE TABLE IF NOT EXISTS `hundred` (
  `newsid` int(11) NOT NULL COMMENT '自动增长',
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='百家新闻';

--
-- 转存表中的数据 `hundred`
--

INSERT INTO `hundred` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(1, '王福重：高考，应该照顾落后地区吗', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=de6cac07b1fd5266a72b3f1793199799/aec379310a55b319b463229944a98226cefc1747.jpg', '跟体育比赛一样，分数面前人人平等，取消分省计划、实行统一命题、取消地区照顾，才是中国高考长治久...', '2016-05-19');

-- --------------------------------------------------------

--
-- 表的结构 `local`
--

CREATE TABLE IF NOT EXISTS `local` (
  `newsid` int(11) NOT NULL COMMENT '自动增长',
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `local`
--

INSERT INTO `local` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(1, '外籍女子带狗乘北京地铁 官微：加强安检(图)', 'http://t11.baidu.com/it/u=http://img.cyol.com/img/law/attachement/jpg/site2/2016-05-19/5685736423620690519.jpg&fm=36', '北京地铁官微了解到基本的进站信息后作出回应称，已将相关情况反映到有关部门加强安检力度，保证运营安全。', '2016-05-19');

-- --------------------------------------------------------

--
-- 表的结构 `nominate`
--

CREATE TABLE IF NOT EXISTS `nominate` (
  `newsid` int(11) NOT NULL COMMENT '自动增长',
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='推荐新闻';

--
-- 转存表中的数据 `nominate`
--

INSERT INTO `nominate` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES
(1, '习近平：加快构建中国特色哲学社会科学', 'http://d.hiphotos.baidu.com/news/q%3D100/sign=983038dd4c36acaf5fe092fc4cdb8d03/d009b3de9c82d1589f602255870a19d8bd3e4277.jpg', '习近平主持召开哲学社会科学工作座谈会。', '2016-05-18'),
(2, '杜兰特表态要血拼第二场 勇士强大不可掉以轻心', 'http://t12.baidu.com/it/u=http://photocdn.sohu.com/20160519/Img450271430.jpg&fm=36', '雷霆核心凯文-杜兰特在今天比赛前接受采访，表示雷霆全队会尽全力再拿下勇士一个主场。', '2016-05-19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entertainment`
--
ALTER TABLE `entertainment`
  ADD PRIMARY KEY (`newsid`), ADD KEY `entertainmenttitle` (`newstitle`);

--
-- Indexes for table `hundred`
--
ALTER TABLE `hundred`
  ADD PRIMARY KEY (`newsid`), ADD UNIQUE KEY `hundredtitle` (`newstitle`);

--
-- Indexes for table `local`
--
ALTER TABLE `local`
  ADD PRIMARY KEY (`newsid`), ADD KEY `localtitle` (`newstitle`);

--
-- Indexes for table `nominate`
--
ALTER TABLE `nominate`
  ADD PRIMARY KEY (`newsid`), ADD KEY `nominatetitle` (`newstitle`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entertainment`
--
ALTER TABLE `entertainment`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `hundred`
--
ALTER TABLE `hundred`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `local`
--
ALTER TABLE `local`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `nominate`
--
ALTER TABLE `nominate`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
