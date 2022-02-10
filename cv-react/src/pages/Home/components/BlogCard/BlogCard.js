import './BlogCard.scss';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { blogData } from '../../../../utils/DataConfig';
import BlogContent from './components/BlogContent/BlogContent';

function BlogCard() {
  return (
    <div id='blog' className='blog-card section'>
      <div className='container'>
        <div className='blog-inner'>
          <SectionTitle title='blog' />
          <BlogContent blogData={blogData} />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
