import React, { useEffect, useContext, useState } from 'react';

import { ChallengesProvider } from '../contexts/ChallengesContext';

import Head from "next/head"
import { GetServerSideProps } from "next";

import { FaGithub, FaLinkedin, FaFacebookSquare, FaHandHoldingUsd, FaPaypal } from 'react-icons/fa';

import styles from '../styles/pages/Home.module.css';


interface UserProps {
  theme: number;
}

export default function Home(props: UserProps) {
  const [numberClick, setNumberClick] = useState(0);
  const [textClick, setTextClick] = useState(["mov\xa0", "\"Yuri Martins\"", ", edx"]);

  const animLogo = () => {
    if (typeof window !== "undefined") {
      let myPath = anime.path('svg#logo path');
      setTimeout(() => {
          anime({
            targets: 'svg#logo path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 3200,
            delay: 20,
            direction: 'alternate',
            loop: false
        });
      }, 500);
      
    }
  }

  useEffect(() => { 
    if (numberClick >= 5) {
      setNumberClick(numberClick - numberClick - 1);
    }
    switch (numberClick) {
      case 0:
        setTextClick(["mov\xa0", "\"Yuri Martins\"", ", edx"]);
        break;
      case 1:
        setTextClick(["console.log(", "\"Yuri Martins\"", ");"]);
        break;
      case 2:
        setTextClick(["print(", "\"Yuri Martins\"", ")"]);
        break;
      case 3:
        setTextClick(["printf(", "\"Yuri Martins\"", ");"]);
        break;
      case 4:
        setTextClick(["puts(", "\"Yuri Martins\"", ");"]);
        break;
      case 5:
        setTextClick(["char name[] =\xa0", "\"Yuri Martins\"", ";"]);
        break;
    }
  }, [numberClick]);

  const clickName = () => {
    setNumberClick(numberClick + 1);
    
  }

  if (typeof window !== "undefined") {
    window.addEventListener("load", (event) => {
      animLogo();
    });
    useEffect(() => {
      animLogo();
    }, [window.location.pathname]);
  }

  return (
    <ChallengesProvider 
      theme={props.theme}
    >
      <div className={styles.container}> 
        <Head>
          <title>Início | Portfólio</title>
        </Head>
        
        <section className={styles.conteudo}>
          <div>
            <video className={styles.VideoBackground} width="320" height="240" autoPlay loop="loop">
              <source src="/static/programando.mp4" type="video/mp4" />
            </video>
            <div>
              <svg id="logo" className={styles.LogoCenter} viewBox="0 0 890 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.776001" y="0" fill="black">
                  <rect fill="white" x="0.776001" width="889" height="233" />
                  <path d="M41.776 56.552C41.776 41.768 48.112 29.48 60.784 19.688C73.648 9.896 89.488 5 108.304 5C122.896 5 134.224 7.976 142.288 13.928C150.544 19.88 154.672 28.424 154.672 39.56C154.672 48.2 152.464 55.208 148.048 60.584C143.824 65.96 138.16 68.648 131.056 68.648C128.368 68.648 125.872 68.168 123.568 67.208C121.456 66.248 119.536 64.712 117.808 62.6C121.648 60.296 124.72 56.84 127.024 52.232C129.52 47.624 130.768 42.824 130.768 37.832C130.768 31.688 128.944 26.984 125.296 23.72C121.648 20.264 116.368 18.536 109.456 18.536C101.2 18.536 94.672 20.84 89.872 25.448C85.264 30.056 82.96 36.488 82.96 44.744C82.96 51.464 84.688 57.896 88.144 64.04C91.6 69.992 99.088 78.056 110.608 88.232C125.776 101.48 135.76 113 140.56 122.792C145.36 132.392 147.76 143.144 147.76 155.048C147.76 176.936 140.176 194.408 125.008 207.464C109.84 220.52 90.448 227.048 66.832 227.048C48.016 227.048 33.136 222.728 22.192 214.088C11.248 205.448 5.776 193.256 5.776 177.512C5.776 163.688 9.904 152.36 18.16 143.528C26.416 134.696 36.4 130.28 48.112 130.28C55.408 130.28 61.36 132.008 65.968 135.464C70.576 138.728 73.072 143.336 73.456 149.288C63.472 149.288 55.312 151.688 48.976 156.488C42.832 161.288 39.76 167.912 39.76 176.36C39.76 184.424 42.256 191.048 47.248 196.232C52.24 201.416 58.96 204.008 67.408 204.008C77.392 204.008 85.456 200.552 91.6 193.64C97.744 186.728 100.816 177.416 100.816 165.704C100.816 156.68 98.8 148.04 94.768 139.784C90.736 131.528 82.384 120.488 69.712 106.664C58.192 94.376 50.608 84.776 46.96 77.864C43.504 70.76 41.776 63.656 41.776 56.552Z" />
                  <path d="M172.33 77H181.834L190.474 37.256L233.098 31.496L223.306 77H240.586L238.282 88.52H221.002L202.57 174.92C202.186 176.648 201.898 178.28 201.706 179.816C201.514 181.16 201.418 182.6 201.418 184.136C201.418 187.976 202.282 190.76 204.01 192.488C205.93 194.024 209.002 194.792 213.226 194.792C218.602 194.792 223.69 192.488 228.49 187.88C233.29 183.08 236.842 176.936 239.146 169.448H251.242C245.098 186.92 236.842 200.168 226.474 209.192C216.106 218.216 204.202 222.728 190.762 222.728C181.162 222.728 173.578 219.752 168.01 213.8C162.634 207.656 159.946 199.112 159.946 188.168C159.946 185.672 160.138 182.888 160.522 179.816C160.906 176.552 161.482 173.096 162.25 169.448L179.53 88.52H170.026L172.33 77Z" />
                  <path d="M343.321 102.056C343.321 117.992 336.793 131.912 323.737 143.816C310.681 155.528 295.129 161.864 277.081 162.824C276.889 166.088 276.697 168.584 276.505 170.312C276.505 171.848 276.505 173.192 276.505 174.344C276.505 183.176 277.945 189.416 280.825 193.064C283.897 196.712 289.369 198.536 297.241 198.536C306.265 198.536 314.521 196.52 322.009 192.488C329.689 188.264 338.425 180.584 348.217 169.448H358.009C346.873 187.496 334.777 200.936 321.721 209.768C308.665 218.408 294.361 222.728 278.809 222.728C264.025 222.728 252.793 218.888 245.113 211.208C237.625 203.528 233.881 192.104 233.881 176.936C233.881 165.992 235.609 154.376 239.065 142.088C242.521 129.8 247.129 118.856 252.889 109.256C259.993 97.736 268.441 89.096 278.233 83.336C288.217 77.384 299.353 74.408 311.641 74.408C322.201 74.408 330.073 76.712 335.257 81.32C340.633 85.736 343.321 92.648 343.321 102.056ZM313.945 89.672C307.417 89.672 300.793 95.528 294.073 107.24C287.545 118.76 282.649 132.68 279.385 149C290.521 148.232 300.217 143.144 308.473 133.736C316.921 124.136 321.145 113.384 321.145 101.48C321.145 97.448 320.569 94.472 319.417 92.552C318.265 90.632 316.441 89.672 313.945 89.672Z" />
                  <path d="M458.915 100.904C458.915 107.432 457.475 112.616 454.595 116.456C451.907 120.104 448.259 121.928 443.651 121.928C442.115 121.928 440.483 121.64 438.755 121.064C437.027 120.488 435.299 119.624 433.571 118.472C434.723 115.4 435.587 112.424 436.163 109.544C436.739 106.664 437.027 103.976 437.027 101.48C437.027 97.64 436.355 94.76 435.011 92.84C433.667 90.728 431.651 89.672 428.963 89.672C420.515 89.672 412.259 99.464 404.195 119.048C396.131 138.44 392.099 156.872 392.099 174.344C392.099 183.176 393.539 189.416 396.419 193.064C399.491 196.712 404.963 198.536 412.835 198.536C421.859 198.536 430.115 196.52 437.603 192.488C445.283 188.264 454.019 180.584 463.811 169.448H473.603C462.467 187.496 450.371 200.936 437.315 209.768C424.259 218.408 409.955 222.728 394.403 222.728C379.619 222.728 368.387 218.888 360.707 211.208C353.219 203.528 349.475 192.104 349.475 176.936C349.475 165.992 351.107 154.376 354.371 142.088C357.827 129.8 362.531 118.856 368.483 109.256C375.587 97.736 384.035 89.096 393.827 83.336C403.811 77.384 414.851 74.408 426.947 74.408C437.507 74.408 445.475 76.712 450.851 81.32C456.227 85.736 458.915 92.264 458.915 100.904Z" />
                  <path d="M537.19 19.4L515.59 120.776L571.174 77H599.686L542.086 117.032C544.774 116.648 546.694 116.36 547.846 116.168C549.19 115.976 550.438 115.88 551.59 115.88C561.382 115.88 569.062 118.952 574.63 125.096C580.39 131.24 583.27 139.4 583.27 149.576C583.27 151.496 583.174 153.416 582.982 155.336C582.79 157.064 582.502 158.792 582.118 160.52L578.95 174.92C578.566 177.224 578.182 179.144 577.798 180.68C577.606 182.216 577.51 183.368 577.51 184.136C577.51 187.784 578.374 190.472 580.102 192.2C582.022 193.928 584.902 194.792 588.742 194.792C593.542 194.792 597.67 193.16 601.126 189.896C604.582 186.632 608.518 179.816 612.934 169.448H625.03C619.078 187.112 611.686 200.456 602.854 209.48C594.022 218.312 583.75 222.728 572.038 222.728C560.326 222.728 551.302 219.944 544.966 214.376C538.822 208.616 535.75 200.456 535.75 189.896C535.75 187.592 535.846 185.192 536.038 182.696C536.422 180.2 536.902 177.608 537.478 174.92L539.782 163.688C540.166 161.96 540.454 160.232 540.646 158.504C540.838 156.776 540.934 154.952 540.934 153.032C540.934 148.424 540.07 144.968 538.342 142.664C536.614 140.36 534.022 139.208 530.566 139.208C527.686 139.208 524.518 140.072 521.062 141.8C517.798 143.336 513.862 146.024 509.254 149.864L494.278 221H452.806L494.566 25.16L537.19 19.4Z" />
                  <path d="M718.508 102.056C718.508 117.992 711.98 131.912 698.924 143.816C685.868 155.528 670.316 161.864 652.268 162.824C652.076 166.088 651.885 168.584 651.693 170.312C651.693 171.848 651.693 173.192 651.693 174.344C651.693 183.176 653.133 189.416 656.013 193.064C659.085 196.712 664.557 198.536 672.429 198.536C681.453 198.536 689.709 196.52 697.197 192.488C704.877 188.264 713.612 180.584 723.404 169.448H733.197C722.061 187.496 709.965 200.936 696.909 209.768C683.853 218.408 669.549 222.728 653.997 222.728C639.213 222.728 627.98 218.888 620.3 211.208C612.812 203.528 609.068 192.104 609.068 176.936C609.068 165.992 610.797 154.376 614.253 142.088C617.709 129.8 622.316 118.856 628.076 109.256C635.18 97.736 643.628 89.096 653.42 83.336C663.404 77.384 674.54 74.408 686.828 74.408C697.388 74.408 705.261 76.712 710.445 81.32C715.821 85.736 718.508 92.648 718.508 102.056ZM689.133 89.672C682.605 89.672 675.98 95.528 669.26 107.24C662.732 118.76 657.837 132.68 654.573 149C665.709 148.232 675.405 143.144 683.661 133.736C692.109 124.136 696.333 113.384 696.333 101.48C696.333 97.448 695.756 94.472 694.604 92.552C693.452 90.632 691.629 89.672 689.133 89.672Z" />
                  <path d="M794.734 190.184C794.734 186.728 795.118 182.408 795.886 177.224C796.846 172.04 798.67 163.784 801.358 152.456C804.046 141.512 805.774 133.64 806.542 128.84C807.31 124.04 807.694 120.008 807.694 116.744C807.694 111.944 806.83 108.296 805.102 105.8C803.374 103.304 800.782 102.056 797.326 102.056C792.718 102.056 788.398 104.456 784.366 109.256C780.526 113.864 777.358 120.296 774.862 128.552L755.278 221H713.806L744.334 77H785.806L782.638 91.976C787.438 86.6 792.622 82.568 798.19 79.88C803.758 77.192 809.806 75.848 816.334 75.848C826.51 75.848 834.382 78.632 839.95 84.2C845.518 89.768 848.302 97.832 848.302 108.392C848.302 112.808 847.726 118.088 846.574 124.232C845.614 130.184 843.598 139.4 840.526 151.88C838.03 161.672 836.398 168.584 835.63 172.616C834.862 176.648 834.478 180.008 834.478 182.696C834.478 186.728 835.438 189.8 837.358 191.912C839.278 193.832 842.158 194.792 845.998 194.792C850.798 194.792 854.926 193.16 858.382 189.896C861.838 186.632 865.774 179.816 870.19 169.448H882.286C876.142 187.304 868.654 200.648 859.822 209.48C851.182 218.312 840.814 222.728 828.718 222.728C817.966 222.728 809.614 219.848 803.662 214.088C797.71 208.136 794.734 200.168 794.734 190.184Z" />
                </mask>
                <path d="M41.776 56.552C41.776 41.768 48.112 29.48 60.784 19.688C73.648 9.896 89.488 5 108.304 5C122.896 5 134.224 7.976 142.288 13.928C150.544 19.88 154.672 28.424 154.672 39.56C154.672 48.2 152.464 55.208 148.048 60.584C143.824 65.96 138.16 68.648 131.056 68.648C128.368 68.648 125.872 68.168 123.568 67.208C121.456 66.248 119.536 64.712 117.808 62.6C121.648 60.296 124.72 56.84 127.024 52.232C129.52 47.624 130.768 42.824 130.768 37.832C130.768 31.688 128.944 26.984 125.296 23.72C121.648 20.264 116.368 18.536 109.456 18.536C101.2 18.536 94.672 20.84 89.872 25.448C85.264 30.056 82.96 36.488 82.96 44.744C82.96 51.464 84.688 57.896 88.144 64.04C91.6 69.992 99.088 78.056 110.608 88.232C125.776 101.48 135.76 113 140.56 122.792C145.36 132.392 147.76 143.144 147.76 155.048C147.76 176.936 140.176 194.408 125.008 207.464C109.84 220.52 90.448 227.048 66.832 227.048C48.016 227.048 33.136 222.728 22.192 214.088C11.248 205.448 5.776 193.256 5.776 177.512C5.776 163.688 9.904 152.36 18.16 143.528C26.416 134.696 36.4 130.28 48.112 130.28C55.408 130.28 61.36 132.008 65.968 135.464C70.576 138.728 73.072 143.336 73.456 149.288C63.472 149.288 55.312 151.688 48.976 156.488C42.832 161.288 39.76 167.912 39.76 176.36C39.76 184.424 42.256 191.048 47.248 196.232C52.24 201.416 58.96 204.008 67.408 204.008C77.392 204.008 85.456 200.552 91.6 193.64C97.744 186.728 100.816 177.416 100.816 165.704C100.816 156.68 98.8 148.04 94.768 139.784C90.736 131.528 82.384 120.488 69.712 106.664C58.192 94.376 50.608 84.776 46.96 77.864C43.504 70.76 41.776 63.656 41.776 56.552Z" fill="white" />
                <path d="M172.33 77H181.834L190.474 37.256L233.098 31.496L223.306 77H240.586L238.282 88.52H221.002L202.57 174.92C202.186 176.648 201.898 178.28 201.706 179.816C201.514 181.16 201.418 182.6 201.418 184.136C201.418 187.976 202.282 190.76 204.01 192.488C205.93 194.024 209.002 194.792 213.226 194.792C218.602 194.792 223.69 192.488 228.49 187.88C233.29 183.08 236.842 176.936 239.146 169.448H251.242C245.098 186.92 236.842 200.168 226.474 209.192C216.106 218.216 204.202 222.728 190.762 222.728C181.162 222.728 173.578 219.752 168.01 213.8C162.634 207.656 159.946 199.112 159.946 188.168C159.946 185.672 160.138 182.888 160.522 179.816C160.906 176.552 161.482 173.096 162.25 169.448L179.53 88.52H170.026L172.33 77Z" fill="white" />
                <path d="M343.321 102.056C343.321 117.992 336.793 131.912 323.737 143.816C310.681 155.528 295.129 161.864 277.081 162.824C276.889 166.088 276.697 168.584 276.505 170.312C276.505 171.848 276.505 173.192 276.505 174.344C276.505 183.176 277.945 189.416 280.825 193.064C283.897 196.712 289.369 198.536 297.241 198.536C306.265 198.536 314.521 196.52 322.009 192.488C329.689 188.264 338.425 180.584 348.217 169.448H358.009C346.873 187.496 334.777 200.936 321.721 209.768C308.665 218.408 294.361 222.728 278.809 222.728C264.025 222.728 252.793 218.888 245.113 211.208C237.625 203.528 233.881 192.104 233.881 176.936C233.881 165.992 235.609 154.376 239.065 142.088C242.521 129.8 247.129 118.856 252.889 109.256C259.993 97.736 268.441 89.096 278.233 83.336C288.217 77.384 299.353 74.408 311.641 74.408C322.201 74.408 330.073 76.712 335.257 81.32C340.633 85.736 343.321 92.648 343.321 102.056ZM313.945 89.672C307.417 89.672 300.793 95.528 294.073 107.24C287.545 118.76 282.649 132.68 279.385 149C290.521 148.232 300.217 143.144 308.473 133.736C316.921 124.136 321.145 113.384 321.145 101.48C321.145 97.448 320.569 94.472 319.417 92.552C318.265 90.632 316.441 89.672 313.945 89.672Z" fill="white" />
                <path d="M458.915 100.904C458.915 107.432 457.475 112.616 454.595 116.456C451.907 120.104 448.259 121.928 443.651 121.928C442.115 121.928 440.483 121.64 438.755 121.064C437.027 120.488 435.299 119.624 433.571 118.472C434.723 115.4 435.587 112.424 436.163 109.544C436.739 106.664 437.027 103.976 437.027 101.48C437.027 97.64 436.355 94.76 435.011 92.84C433.667 90.728 431.651 89.672 428.963 89.672C420.515 89.672 412.259 99.464 404.195 119.048C396.131 138.44 392.099 156.872 392.099 174.344C392.099 183.176 393.539 189.416 396.419 193.064C399.491 196.712 404.963 198.536 412.835 198.536C421.859 198.536 430.115 196.52 437.603 192.488C445.283 188.264 454.019 180.584 463.811 169.448H473.603C462.467 187.496 450.371 200.936 437.315 209.768C424.259 218.408 409.955 222.728 394.403 222.728C379.619 222.728 368.387 218.888 360.707 211.208C353.219 203.528 349.475 192.104 349.475 176.936C349.475 165.992 351.107 154.376 354.371 142.088C357.827 129.8 362.531 118.856 368.483 109.256C375.587 97.736 384.035 89.096 393.827 83.336C403.811 77.384 414.851 74.408 426.947 74.408C437.507 74.408 445.475 76.712 450.851 81.32C456.227 85.736 458.915 92.264 458.915 100.904Z" fill="white" />
                <path d="M537.19 19.4L515.59 120.776L571.174 77H599.686L542.086 117.032C544.774 116.648 546.694 116.36 547.846 116.168C549.19 115.976 550.438 115.88 551.59 115.88C561.382 115.88 569.062 118.952 574.63 125.096C580.39 131.24 583.27 139.4 583.27 149.576C583.27 151.496 583.174 153.416 582.982 155.336C582.79 157.064 582.502 158.792 582.118 160.52L578.95 174.92C578.566 177.224 578.182 179.144 577.798 180.68C577.606 182.216 577.51 183.368 577.51 184.136C577.51 187.784 578.374 190.472 580.102 192.2C582.022 193.928 584.902 194.792 588.742 194.792C593.542 194.792 597.67 193.16 601.126 189.896C604.582 186.632 608.518 179.816 612.934 169.448H625.03C619.078 187.112 611.686 200.456 602.854 209.48C594.022 218.312 583.75 222.728 572.038 222.728C560.326 222.728 551.302 219.944 544.966 214.376C538.822 208.616 535.75 200.456 535.75 189.896C535.75 187.592 535.846 185.192 536.038 182.696C536.422 180.2 536.902 177.608 537.478 174.92L539.782 163.688C540.166 161.96 540.454 160.232 540.646 158.504C540.838 156.776 540.934 154.952 540.934 153.032C540.934 148.424 540.07 144.968 538.342 142.664C536.614 140.36 534.022 139.208 530.566 139.208C527.686 139.208 524.518 140.072 521.062 141.8C517.798 143.336 513.862 146.024 509.254 149.864L494.278 221H452.806L494.566 25.16L537.19 19.4Z" fill="white" />
                <path d="M718.508 102.056C718.508 117.992 711.98 131.912 698.924 143.816C685.868 155.528 670.316 161.864 652.268 162.824C652.076 166.088 651.885 168.584 651.693 170.312C651.693 171.848 651.693 173.192 651.693 174.344C651.693 183.176 653.133 189.416 656.013 193.064C659.085 196.712 664.557 198.536 672.429 198.536C681.453 198.536 689.709 196.52 697.197 192.488C704.877 188.264 713.612 180.584 723.404 169.448H733.197C722.061 187.496 709.965 200.936 696.909 209.768C683.853 218.408 669.549 222.728 653.997 222.728C639.213 222.728 627.98 218.888 620.3 211.208C612.812 203.528 609.068 192.104 609.068 176.936C609.068 165.992 610.797 154.376 614.253 142.088C617.709 129.8 622.316 118.856 628.076 109.256C635.18 97.736 643.628 89.096 653.42 83.336C663.404 77.384 674.54 74.408 686.828 74.408C697.388 74.408 705.261 76.712 710.445 81.32C715.821 85.736 718.508 92.648 718.508 102.056ZM689.133 89.672C682.605 89.672 675.98 95.528 669.26 107.24C662.732 118.76 657.837 132.68 654.573 149C665.709 148.232 675.405 143.144 683.661 133.736C692.109 124.136 696.333 113.384 696.333 101.48C696.333 97.448 695.756 94.472 694.604 92.552C693.452 90.632 691.629 89.672 689.133 89.672Z" fill="white" />
                <path d="M794.734 190.184C794.734 186.728 795.118 182.408 795.886 177.224C796.846 172.04 798.67 163.784 801.358 152.456C804.046 141.512 805.774 133.64 806.542 128.84C807.31 124.04 807.694 120.008 807.694 116.744C807.694 111.944 806.83 108.296 805.102 105.8C803.374 103.304 800.782 102.056 797.326 102.056C792.718 102.056 788.398 104.456 784.366 109.256C780.526 113.864 777.358 120.296 774.862 128.552L755.278 221H713.806L744.334 77H785.806L782.638 91.976C787.438 86.6 792.622 82.568 798.19 79.88C803.758 77.192 809.806 75.848 816.334 75.848C826.51 75.848 834.382 78.632 839.95 84.2C845.518 89.768 848.302 97.832 848.302 108.392C848.302 112.808 847.726 118.088 846.574 124.232C845.614 130.184 843.598 139.4 840.526 151.88C838.03 161.672 836.398 168.584 835.63 172.616C834.862 176.648 834.478 180.008 834.478 182.696C834.478 186.728 835.438 189.8 837.358 191.912C839.278 193.832 842.158 194.792 845.998 194.792C850.798 194.792 854.926 193.16 858.382 189.896C861.838 186.632 865.774 179.816 870.19 169.448H882.286C876.142 187.304 868.654 200.648 859.822 209.48C851.182 218.312 840.814 222.728 828.718 222.728C817.966 222.728 809.614 219.848 803.662 214.088C797.71 208.136 794.734 200.168 794.734 190.184Z" fill="white" />
                <path d="M41.776 56.552C41.776 41.768 48.112 29.48 60.784 19.688C73.648 9.896 89.488 5 108.304 5C122.896 5 134.224 7.976 142.288 13.928C150.544 19.88 154.672 28.424 154.672 39.56C154.672 48.2 152.464 55.208 148.048 60.584C143.824 65.96 138.16 68.648 131.056 68.648C128.368 68.648 125.872 68.168 123.568 67.208C121.456 66.248 119.536 64.712 117.808 62.6C121.648 60.296 124.72 56.84 127.024 52.232C129.52 47.624 130.768 42.824 130.768 37.832C130.768 31.688 128.944 26.984 125.296 23.72C121.648 20.264 116.368 18.536 109.456 18.536C101.2 18.536 94.672 20.84 89.872 25.448C85.264 30.056 82.96 36.488 82.96 44.744C82.96 51.464 84.688 57.896 88.144 64.04C91.6 69.992 99.088 78.056 110.608 88.232C125.776 101.48 135.76 113 140.56 122.792C145.36 132.392 147.76 143.144 147.76 155.048C147.76 176.936 140.176 194.408 125.008 207.464C109.84 220.52 90.448 227.048 66.832 227.048C48.016 227.048 33.136 222.728 22.192 214.088C11.248 205.448 5.776 193.256 5.776 177.512C5.776 163.688 9.904 152.36 18.16 143.528C26.416 134.696 36.4 130.28 48.112 130.28C55.408 130.28 61.36 132.008 65.968 135.464C70.576 138.728 73.072 143.336 73.456 149.288C63.472 149.288 55.312 151.688 48.976 156.488C42.832 161.288 39.76 167.912 39.76 176.36C39.76 184.424 42.256 191.048 47.248 196.232C52.24 201.416 58.96 204.008 67.408 204.008C77.392 204.008 85.456 200.552 91.6 193.64C97.744 186.728 100.816 177.416 100.816 165.704C100.816 156.68 98.8 148.04 94.768 139.784C90.736 131.528 82.384 120.488 69.712 106.664C58.192 94.376 50.608 84.776 46.96 77.864C43.504 70.76 41.776 63.656 41.776 56.552Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                <path d="M172.33 77H181.834L190.474 37.256L233.098 31.496L223.306 77H240.586L238.282 88.52H221.002L202.57 174.92C202.186 176.648 201.898 178.28 201.706 179.816C201.514 181.16 201.418 182.6 201.418 184.136C201.418 187.976 202.282 190.76 204.01 192.488C205.93 194.024 209.002 194.792 213.226 194.792C218.602 194.792 223.69 192.488 228.49 187.88C233.29 183.08 236.842 176.936 239.146 169.448H251.242C245.098 186.92 236.842 200.168 226.474 209.192C216.106 218.216 204.202 222.728 190.762 222.728C181.162 222.728 173.578 219.752 168.01 213.8C162.634 207.656 159.946 199.112 159.946 188.168C159.946 185.672 160.138 182.888 160.522 179.816C160.906 176.552 161.482 173.096 162.25 169.448L179.53 88.52H170.026L172.33 77Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                <path d="M343.321 102.056C343.321 117.992 336.793 131.912 323.737 143.816C310.681 155.528 295.129 161.864 277.081 162.824C276.889 166.088 276.697 168.584 276.505 170.312C276.505 171.848 276.505 173.192 276.505 174.344C276.505 183.176 277.945 189.416 280.825 193.064C283.897 196.712 289.369 198.536 297.241 198.536C306.265 198.536 314.521 196.52 322.009 192.488C329.689 188.264 338.425 180.584 348.217 169.448H358.009C346.873 187.496 334.777 200.936 321.721 209.768C308.665 218.408 294.361 222.728 278.809 222.728C264.025 222.728 252.793 218.888 245.113 211.208C237.625 203.528 233.881 192.104 233.881 176.936C233.881 165.992 235.609 154.376 239.065 142.088C242.521 129.8 247.129 118.856 252.889 109.256C259.993 97.736 268.441 89.096 278.233 83.336C288.217 77.384 299.353 74.408 311.641 74.408C322.201 74.408 330.073 76.712 335.257 81.32C340.633 85.736 343.321 92.648 343.321 102.056ZM313.945 89.672C307.417 89.672 300.793 95.528 294.073 107.24C287.545 118.76 282.649 132.68 279.385 149C290.521 148.232 300.217 143.144 308.473 133.736C316.921 124.136 321.145 113.384 321.145 101.48C321.145 97.448 320.569 94.472 319.417 92.552C318.265 90.632 316.441 89.672 313.945 89.672Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                <path d="M458.915 100.904C458.915 107.432 457.475 112.616 454.595 116.456C451.907 120.104 448.259 121.928 443.651 121.928C442.115 121.928 440.483 121.64 438.755 121.064C437.027 120.488 435.299 119.624 433.571 118.472C434.723 115.4 435.587 112.424 436.163 109.544C436.739 106.664 437.027 103.976 437.027 101.48C437.027 97.64 436.355 94.76 435.011 92.84C433.667 90.728 431.651 89.672 428.963 89.672C420.515 89.672 412.259 99.464 404.195 119.048C396.131 138.44 392.099 156.872 392.099 174.344C392.099 183.176 393.539 189.416 396.419 193.064C399.491 196.712 404.963 198.536 412.835 198.536C421.859 198.536 430.115 196.52 437.603 192.488C445.283 188.264 454.019 180.584 463.811 169.448H473.603C462.467 187.496 450.371 200.936 437.315 209.768C424.259 218.408 409.955 222.728 394.403 222.728C379.619 222.728 368.387 218.888 360.707 211.208C353.219 203.528 349.475 192.104 349.475 176.936C349.475 165.992 351.107 154.376 354.371 142.088C357.827 129.8 362.531 118.856 368.483 109.256C375.587 97.736 384.035 89.096 393.827 83.336C403.811 77.384 414.851 74.408 426.947 74.408C437.507 74.408 445.475 76.712 450.851 81.32C456.227 85.736 458.915 92.264 458.915 100.904Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                <path d="M537.19 19.4L515.59 120.776L571.174 77H599.686L542.086 117.032C544.774 116.648 546.694 116.36 547.846 116.168C549.19 115.976 550.438 115.88 551.59 115.88C561.382 115.88 569.062 118.952 574.63 125.096C580.39 131.24 583.27 139.4 583.27 149.576C583.27 151.496 583.174 153.416 582.982 155.336C582.79 157.064 582.502 158.792 582.118 160.52L578.95 174.92C578.566 177.224 578.182 179.144 577.798 180.68C577.606 182.216 577.51 183.368 577.51 184.136C577.51 187.784 578.374 190.472 580.102 192.2C582.022 193.928 584.902 194.792 588.742 194.792C593.542 194.792 597.67 193.16 601.126 189.896C604.582 186.632 608.518 179.816 612.934 169.448H625.03C619.078 187.112 611.686 200.456 602.854 209.48C594.022 218.312 583.75 222.728 572.038 222.728C560.326 222.728 551.302 219.944 544.966 214.376C538.822 208.616 535.75 200.456 535.75 189.896C535.75 187.592 535.846 185.192 536.038 182.696C536.422 180.2 536.902 177.608 537.478 174.92L539.782 163.688C540.166 161.96 540.454 160.232 540.646 158.504C540.838 156.776 540.934 154.952 540.934 153.032C540.934 148.424 540.07 144.968 538.342 142.664C536.614 140.36 534.022 139.208 530.566 139.208C527.686 139.208 524.518 140.072 521.062 141.8C517.798 143.336 513.862 146.024 509.254 149.864L494.278 221H452.806L494.566 25.16L537.19 19.4Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                <path d="M718.508 102.056C718.508 117.992 711.98 131.912 698.924 143.816C685.868 155.528 670.316 161.864 652.268 162.824C652.076 166.088 651.885 168.584 651.693 170.312C651.693 171.848 651.693 173.192 651.693 174.344C651.693 183.176 653.133 189.416 656.013 193.064C659.085 196.712 664.557 198.536 672.429 198.536C681.453 198.536 689.709 196.52 697.197 192.488C704.877 188.264 713.612 180.584 723.404 169.448H733.197C722.061 187.496 709.965 200.936 696.909 209.768C683.853 218.408 669.549 222.728 653.997 222.728C639.213 222.728 627.98 218.888 620.3 211.208C612.812 203.528 609.068 192.104 609.068 176.936C609.068 165.992 610.797 154.376 614.253 142.088C617.709 129.8 622.316 118.856 628.076 109.256C635.18 97.736 643.628 89.096 653.42 83.336C663.404 77.384 674.54 74.408 686.828 74.408C697.388 74.408 705.261 76.712 710.445 81.32C715.821 85.736 718.508 92.648 718.508 102.056ZM689.133 89.672C682.605 89.672 675.98 95.528 669.26 107.24C662.732 118.76 657.837 132.68 654.573 149C665.709 148.232 675.405 143.144 683.661 133.736C692.109 124.136 696.333 113.384 696.333 101.48C696.333 97.448 695.756 94.472 694.604 92.552C693.452 90.632 691.629 89.672 689.133 89.672Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
                <path d="M794.734 190.184C794.734 186.728 795.118 182.408 795.886 177.224C796.846 172.04 798.67 163.784 801.358 152.456C804.046 141.512 805.774 133.64 806.542 128.84C807.31 124.04 807.694 120.008 807.694 116.744C807.694 111.944 806.83 108.296 805.102 105.8C803.374 103.304 800.782 102.056 797.326 102.056C792.718 102.056 788.398 104.456 784.366 109.256C780.526 113.864 777.358 120.296 774.862 128.552L755.278 221H713.806L744.334 77H785.806L782.638 91.976C787.438 86.6 792.622 82.568 798.19 79.88C803.758 77.192 809.806 75.848 816.334 75.848C826.51 75.848 834.382 78.632 839.95 84.2C845.518 89.768 848.302 97.832 848.302 108.392C848.302 112.808 847.726 118.088 846.574 124.232C845.614 130.184 843.598 139.4 840.526 151.88C838.03 161.672 836.398 168.584 835.63 172.616C834.862 176.648 834.478 180.008 834.478 182.696C834.478 186.728 835.438 189.8 837.358 191.912C839.278 193.832 842.158 194.792 845.998 194.792C850.798 194.792 854.926 193.16 858.382 189.896C861.838 186.632 865.774 179.816 870.19 169.448H882.286C876.142 187.304 868.654 200.648 859.822 209.48C851.182 218.312 840.814 222.728 828.718 222.728C817.966 222.728 809.614 219.848 803.662 214.088C797.71 208.136 794.734 200.168 794.734 190.184Z" stroke="white" strokeWidth="5" mask="url(#path-1-outside-1)" />
              </svg>
            </div>
            <div className={styles.Name} onClick={clickName}>
              <p>{ textClick[0] }</p>
              <h3>{ textClick[1] }</h3>
              <p>{ textClick[2] }</p>
            </div>
            <div className={styles.Habilities}>
              <h4>Desenvolvedor</h4>
              <h5><p>{"{"}</p>Frontend & Backend<p>{"}"}</p></h5>
            </div>
            <div className={styles.RedesSociais}>
              <a href="https://github.com/stecken"><FaGithub className={styles.Icone} /></a>
              <a href="https://www.linkedin.com/in/yurimartinsdev/"><FaLinkedin className={styles.Icone} /></a>
              <a href="https://www.facebook.com/yuri.martins.54738/"><FaFacebookSquare className={styles.Icone} /></a>
              <a href="https://www.msf.org.br/doador-sem-fronteiras"><FaHandHoldingUsd className={styles.Icone} /></a>
              <FaPaypal className={styles.Icone}/>
            </div>
          </div>
          <div className={styles.englobaDev}>
              <div className={styles.boxTop}/>
              <div className={styles.DevText}>
                <h4>Code & Development</h4>
                <img src="/static/space.png" />
              </div>
            <div className={styles.boxBot + " " + styles.boxBotModifi} />
            <div className={styles.boxTopModifi} />
          </div>
        </section>  
      </div>
    </ChallengesProvider>
  )
}

/*
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted, user } = ctx.req.cookies;

  if (user == undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
*/
