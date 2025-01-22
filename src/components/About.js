import AboutImg from '../assets/about.png';
export default function About() {
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About me</h1>
                <p className='pb-5'>Hi My name is Steephanraj. I am full stack web developer. I build beautiful website with React.js and Tailwind CSS</p>
                <p className='pb-5'>I am proficient in Frontend skills like React.js, Redux, Redux Toolkit, Typescript, Axios, Tailwind CSS,Sass and many more...</p>
                <p className='pb-5'>In backend I know Nodejs, Express js, MongoDB</p>
            </div>
        </div>
    </section>
}