import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import './AddCourse.scss'
import Navbar from '../../components/Navbar/Navbar'
import { createCourse } from '../../actions/course';
const AddCourse = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [img,setImg]=useState('')
    const [cost,setCost]=useState('')
    const [desc,setDesc]=useState('')
    const [duration,setDuration]=useState('')
    const User = useSelector((state) => (state.currentUserReducer))
    const createdBy = User?.result?._id
    const [videos,setVideos] =  useState([{title:'',link:'',id:uuidv4()}])
    const handleLinks = () =>{
        setVideos([...videos,{title:'',link:'',id:uuidv4()}])
    }
    const handleChange = (e,id)=>{
        const newValues =  videos.map(v =>{
            if(v.id === id){
                if(e.target.name === 'title'){
                    v['title']=e.target.value
                }else{
                    v['link']=e.target.value
                }
            }
            return v;
        })
       setVideos(newValues)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createCourse({name,img,cost,desc,duration,createdBy,videos},navigate))

    }

    const handleDelete = (id)=>{
        const newValues = videos.filter(v => v.id!=id)
        setVideos(newValues)
    }
  return (
   <div className="addcourse-container">
            <Navbar />
            <div className="addcourse-form my-5">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h2 className='text-center'>Add Your Products</h2>
                            <div className="card shadow mt-2">
                                <div className="card-body">
                                    <form className='row gx-5' onSubmit={handleSubmit} >
                                <div className="form-group mb-3">
                                <label  className="form-label">Product Name</label>
                                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className="form-group mb-3">
                                <label  className="form-label">Product Thumbnail</label>
                                <input type="text" className="form-control" value={img} onChange={ e =>setImg(e.target.value) } />
                            </div>
                            <div className="form-group mb-3">
                                <label  className="form-label">Product Description</label>
                                <textarea type="text" className="form-control" value={desc} onChange={e => setDesc(e.target.value)} />
                            </div>
                            <div className="form-group mb-3">
                                <label  className="form-label">Product Usage Duration </label>
                                <input type="number" className="form-control" value={duration} onChange={e => setDuration(e.target.value)} / >
                            </div>
                            
                            <div className="form-group mb-3">
                                <label  className="form-label">Product Cost (in ₹)</label>
                                <input type="number" className="form-control" value={cost} onChange={e => setCost(e.target.value)} / >
                            </div>
                            
                            
                            <div className="form-group">
                                <label className="form-label">Video Links <span onClick={handleLinks}> <i className="fa-solid fa-plus"></i></span></label>

                            {videos.map((v,idx) => (
                            
                                <div className='mb-3' key={v.id}> 

                                    <h6 className='mt-3'>Video {idx+1}  <span onClick={()=> handleDelete(v.id)}><i className="fa-solid fa-trash"></i></span> </h6>

                                    <input type="text" className='form-control mb-1'  name="title" placeholder='title' value={v.title} onChange={ e => handleChange(e,v.id)} />
                                   
                                  
                                    <input type="url"  className='form-control mb-1' name="link" placeholder='video-link' value={v.link} onChange={ e => handleChange(e,v.id)} />
                                    
                                </div>
                            ))}
                            </div>
                            
                            <div className="d-grid gap-2">
                                <button className="btn btn-info">Sell Product</button>
                            </div>
                            
                         </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
   </div>
  )
}

export default AddCourse