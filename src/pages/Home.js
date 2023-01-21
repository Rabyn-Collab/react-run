import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { removePost } from '../features/post';



const Home = () => {

  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.post);
  const nav = useNavigate();

  // let data = [
  //   { id: 1, title: 'hello' },
  //   { id: 2, title: 'someone' }
  // ];

  // const newPost = { id: 1, title: 'namaste' }


  // const newData = data.map((d) => {
  //   return d.id === 1 ? newPost : d
  // });


  // console.log(newData);



  // const data = [
  //   {
  //     "id": 1,
  //     "name": "Leanne Graham",
  //     "username": "Bret",
  //     "email": "Sincere@april.biz",
  //     "phone": "1-770-736-8031 x56442",
  //     "website": "hildegard.org",
  //     "company": {

  //       "catchPhrase": "Multi-layered client-server neural-net",
  //       "bs": "harness real-time e-markets"
  //     }
  //   }
  // ];

  // let m = {
  //   title: 'some'
  // };
  // let c = m.title ?? 'something';
  // console.log(c);

  // console.log(data[0].company.person?.name);

  // const [m, setM] = useState(null);




  // setTimeout(() => {
  //   setM({
  //     title: 'Avatar'
  //   });
  // }, 2000);


  const navEdit = (post) => {
    nav('/post/edit', {
      state: {
        post: post
      }
    });
  }

  const navDetailPage = (post) => {
    nav('/detail', {
      state: {
        post: post
      }
    });
  }

  // const m = {
  //   title: 'hello',
  //   detail: 'some thing'
  // };

  // const {title, detail} = m;



  return (
    <div className='px-[2%] grid grid-cols-3 gap-5 lg:grid-cols-2 sm:grid-cols-1 '>

      {/* <h1>{m?.title}</h1> */}

      {posts.length === 0 && <h1 className='text-2xl  p-14'>Add Some Posts .......</h1>}
      {posts.map((p, i) => {
        return <div className=' shadow-xl mt-7' key={p.id}>
          <img className='h-[250px] w-full' src={p.imageUrl} alt="" />

          <div className='p-5 space-y-2'>
            <h1 className='text-2xl font-semibold sm:text-xl'>{p.title}</h1>
            <p className='text-justify'>{p.detail.substring(0, 150) + '...'}</p>



            <div className='flex justify-between'>
              <button onClick={() => navDetailPage(p)} className='text-blue-500'>Read More</button>
              <div className='space-x-3'>
                <button onClick={() => navEdit(p)}><i className="fa-solid fa-pen-to-square text-green-500"></i></button>
                <button onClick={() => dispatch(removePost(i))}><i className="fa-solid fa-trash  text-pink-700"></i></button>
              </div>
            </div>



          </div>





        </div>
      })}




    </div>
  )
}

export default Home
