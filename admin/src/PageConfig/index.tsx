import Blog from './Blog.conf';
import Achievements from './Achievements.conf';
import Admins from './Admins.conf';
import Admission from './Admission.conf';
 import AdmissionOpenMessage from './Admission_open_message.conf';
import Facility from './Facility.conf';
import GalleryCategory from './Gallery_category.conf';
import Gallery from './Gallery.conf';
import Messages from './Messages.conf';
import Notification from './Notification.conf';
import PagesCategory from './Pages_category.conf.tsx';
 import Pages from './Pages.conf';
import Poster from './Poster.conf';
import QuickLink from './Quick_link.conf';
import SchoolInfo from './School_info.conf';
import SchoolWelcomeMessage from './School_welcome_message.conf';
import Toper from './Toper.conf';
 import ToperCategory from './Toper_category.conf';

const Page = [
  ...Blog,
  ...Achievements,
  ...Admins,
  ...Admission,
 ...AdmissionOpenMessage,
  ...Facility,
  ...GalleryCategory,
  ...Gallery,
  ...Messages,
  ...Notification,
  ...PagesCategory,
   ...Pages,
  ...Poster,
  ...QuickLink,
  ...SchoolInfo,
  ...SchoolWelcomeMessage,
  ...Toper,
   ...ToperCategory,
];

export default Page 
