import ResumeImg from '../assets/resume.jpg';
export default function Contact() {
    return <section className='flex flex-col bg-primary px-5 py-32 text-white' id='contact'>

        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail,please contact me</p>
            <p className='pb-5'><span className='font-bold'>Email:</span> steephan22raj@gmail.com</p>
            <p className='pb-5'><span className='font-bold'>Phone:</span> 7200627637</p>

        </div>
    </section>
}