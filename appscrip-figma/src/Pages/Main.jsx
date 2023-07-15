import React from 'react'
import styles from '../Styles/Main.module.css'
import { SignupButton } from '@/Components/Buttons/SignupButton'
export const Main = () => {
    return (
        <div className={styles.mainDiv}>
            <p className={styles.heading} >Elevate Your Craft</p>
            <div className={styles.box1}>
                <div className={styles.row1Container}>
                    <div className={styles.row1}>
                        <span>Unlock Your ABC Earning Potential</span>
                        <span>Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.</span>
                        <img src="/assets/images/key-feature/Frame48101613 2.png" alt="phone" />
                        <img src="/assets/images/key-feature/image15.png" alt="money" />
                    </div>
                    <div className={styles.row1}>
                        <span>Boost Your Sales with Built-in E-commerce</span>
                        <span>Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase and sell your exclusive products, whether it's merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.</span>
                        <div className={styles.imgContainer}>
                            <img src="/assets/images/key-feature/image16.png" alt="img16" />
                            <img src="/assets/images/key-feature/Rectangle28832.png" alt="modelImg" />
                            <img src="/assets/images/key-feature/Rectangle28766.png" alt="modelImg" />
                            <img src="/assets/images/key-feature/Rectangle28767.png" alt="modelImg" />

                        </div>
                    </div>
                </div>
                <div className={styles.row2Container}>
                    <div className={styles.row2}>
                        <img src="/assets/images/key-feature/image12.png" alt="img12" />
                        <span>Save Time with
                            Automation and Efficiency</span>
                        <span>Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content.</span>
                    </div>
                    <div className={styles.row2}>
                        <img src="/assets/images/key-feature/image13.png" alt="img13" />
                        <span>Join a Supportive
                            Community</span>
                        <span>Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth.</span>
                    </div>
                    <div className={styles.row2}>
                        <img src="/assets/images/key-feature/image14.png" alt="img14" />
                        <span>Unlock Exclusive Opportunities and Prizes</span>
                        <span>Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards.</span>
                    </div>
                </div>
            </div>
            <div className={styles.box2}>
                <span>Don't miss out on ABC’s Incredible features and Opportunities.</span>
                <span>Join us today and unlock your
                    full potential as a creator</span>
                <SignupButton text='Join Now' />
            </div>
            <div className={styles.box3}>Missing Img</div>
            <div className={styles.box4}>
                <div className={styles.galaxy}></div>
                <div className={styles.galaxy}></div>
                <div className={styles.galaxy}></div>
                <div className={styles.galaxy}></div>
                <div>
                    <span>Ready to Cash in Your Connections?
                        Join Our Affiliate Program</span>
                    <span>Join now and get </span>
                    <span>7.5%</span>
                    <span>commission on all creator referrals for the entire year.</span>
                    <SignupButton text='Earn Now' />
                </div>
            </div>
            <div className={styles.box5}>
                <img src="/assets/images/community-page/image1.png" alt="img1" />
                <img src="/assets/images/community-page/image2.png" alt="img2" />
                <span>Join the ABC Community</span>
                <span>Become part of a vibrant and supportive community of like-minded creators by joining ABC's exclusive platform.
                    Collaborate, learn, and connect with fellow creators who share your passion for adult content creation.</span>
                <SignupButton text='Learn more' />
            </div>
        </div>
    )
}
