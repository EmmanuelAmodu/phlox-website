import React, { ComponentProps, FC } from 'react';
import './App.css';
import Button from './components/button';
import {ReactComponent as ArrowIcon} from './assets/icons/arrow-right.svg';
import Input from './components/input';
import Hero from './assets/img/hero.png';
import Twitter from './assets/icons/twitter.svg';
import {ReactComponent as WorldMap} from './assets/img/map.svg';
import { classes } from './common/util';
import { containerClassName } from './common/styles';

const JoinWaitListButton: FC<ComponentProps<'button'>> = ({className, ...props}) => {
  return (
    <Button {...props} className={classes('flex items-center gap-2', className)}>
      <span>Join our waitlist</span>
      <ArrowIcon/>
    </Button>
  )
}

function App() {
  return (
    <div className="flex flex-col bg-[url('../public/hero-pattern.png')] bg-cover bg-no-repeat min-h-screen pt-[45px]">
      <header className={classes("flex w-full items-center justify-between", containerClassName)}>
        <h1 className='font-neuropolitical text-primary text-2xl md:text-3xl'>Phlox</h1>
        <JoinWaitListButton className='md:flex hidden'/>
      </header>
      <section className='mt-[58px] md:mt-[68px] flex-1 relative flex flex-col w-full'>
        <div className={classes('md:flex space-y-8 md:space-y-0 w-full', containerClassName)}>
          <div className='flex flex-col justify-center'>
            <h1 className='text-black font-extrabold font-sans text-[54px] leading-[66.8px] md:text-[64px] md:leading-[76.8px]'>
              Experience <br className="hidden md:block"/>seamless<br/>
              <span className="block bg-gradient-to-r from-tertiary via-secondary to-primary text-transparent bg-clip-text">Global Transaction</span>
            </h1>
            <p className="font-manrope text-[14px] leading-[22.78px] md:text-[24px] md:leading-[32.78px] text-sub-text mb-[45px]">An international financial connectivity.</p>
           <div> <Input placeholder="Enter your email" rightItem={<JoinWaitListButton className="max-sm:[&_span]:hidden "/>} /></div>
           <div className='mt-[24px]'>
            <div className="rounded-[32px] p-[12px] bg-white/50 inline-block">
              <p className='font-manrope text-sm text-primary font-medium'>Already joined: 5,632</p>
            </div>
           </div>
          </div>
          <div>
            <img src={Hero} alt="hero" className='relative -left-4 md:left-0 block z-10'/>
          </div>
        </div>
        <div className="flex-1 relative max-sm:min-h-[180px] flex items-center">  
        <div className={classes('w-full', containerClassName)}>
          <div className='inline-block'>
            <a className="rounded-[24px] p-[8px] pl-[16px] bg-white/50 flex items-center gap-2 box-content min-w-[130px] z-10 relative" href="/#">
              <p className='font-manrope text-sm text-[#111111] font-medium whitespace-nowrap'>Follow us on </p>
              <img src={Twitter} alt="twitter"/>
            </a>
          </div>
          </div>
          <div className='absolute bottom-0 right-0'>
            <WorldMap/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

console.log('FEMI')
