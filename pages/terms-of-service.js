import styles from "./styles.module.css";
import Navbar from "../components/Navbar";
import Snackbar from "../components/SnackBar";
import Link from "next/link";
export default function Terms() {
  return (
    <div id="home" className={styles["home"]}>
     <Snackbar
        message={[
          "New batch on forex trading starting soon ‼️ ",
          <Link target="_blank" href="/course/forex/" rel="noopener noreferrer" key={1}>
            <a id="offprice">
              REGISTER NOW
            </a>
          </Link>,
          " ‼️",
        ]}
      />
      <Navbar />

      <div id="memberships" className="margin">
        <section className={styles["pricing"]}>
          <div className={styles["heading-wrapper"]}>
            <br />
            <h2>Terms of Service</h2>
          </div>
          <p>
            <span> 1. Using the website</span>
            <br />
            ‍By using our Website, you are deemed to have accepted the following
            terms and conditions. If you do not want to be legally bound by
            these terms and conditions, please do not access or use the Website.
            We reserve the right to change these terms and conditions at any
            time and you are advised to review these terms regularly to ensure
            you are aware of any changes. Your continued use of the Website
            after such changes are posted will be deemed agreement on your part
            to these terms and conditions as amended. ‍<br />
            <br />
            <span>2. Intellectual property</span>
            <br />
            ‍2.1 Copyright and all intellectual property rights in the content
            of the website are vested in Finquest learning and reserved, unless
            indicated otherwise. The content of the Website belongs to Finquest
            learning unless indicated otherwise. You may use the content of the
            Website subject to the following conditions: <br />
            (a) It is used for information purposes only
            <br />
            (b) It is used only for your own personal, non-commercial use
            <br />
            (c)Any copies or downloads of any content from the Website must
            include a notice that copyright in the relevant material is owned by
            Finquest learning
            <br />
            2.2 Except as expressly provided above, nothing contained on this
            Website should be construed as conferring any licence or right to
            use any trade mark or copyright of Finquest learning&apos;s or any
            third party.
            <br />
            ‍3. Submission of comments/contributions to the website and Finquest
            learning&apos;s blogs
            <br />
            ‍3.1 You may submit comments to Finquest learning, including without
            limitation for publication on our Blogs.
            <br />
            3.2 Any comments submitted in connection with our Blogs are
            submitted on the basis that we will review and may edit such
            comments prior to publication on the Website, and that not all
            submissions will be published. Publication is entirely at the
            discretion of Finquest learning. We accept no responsibility or
            liability in relation to the content of any material posted or
            published on this Web site by third parties or in relation to
            contributions by third parties which we publish on the Web site. You
            are entirely liable for all activities conducted by you or by others
            authorised by you or otherwise on your behalf.
            <br />
            3.3 If and to the extent that you submit any personal data(such as
            your name and email address) to Finquest learning through the Blogs,
            Finquest learning confirms that it will only use any such personal
            data for the purposes for which you have provided it.
            <br />
            3.4 Any communications which we receive from you in connection with
            the Blogs and any material that you transmit or post or submit via
            this Web site will be deemed non-confidential and non-proprietary
            and we reserve the right to use the content of such communications
            for any purpose whatsoever. In relation to such contributions you
            grant us a perpetual, royalty-free, non-exclusive, sub-licensable
            right and license to publish, adapt, use, modify ,reproduce, edit,
            and exercise all copyright and publicity rights with respect to such
            work world-wide and/or to incorporate it in other works in any media
            now known or later developed for the full term of any rights that
            may exist in such content, consistent with the privacy restrictions
            set forth in the Privacy Policy. If you do not wish to grant such
            rights to Finquest learning please do not submit your contribution
            to this Web site. By submitting your contribution to this Website,
            you also:
            <br />
            3.4.1 Warrant that such contribution is your own original work and
            that you have the right to make it available to us for all the
            purposes specified above;
            <br />
            3.4.2 Warrant that such contribution is not defamatory, does not
            infringe the rights of any third party and does not infringe any
            law;
            <br />
            3.4.3 Agree to use this Website only for lawful purposes and in a
            manner that does not restrict or inhibit the use and enjoyment of
            this Web site by any third party. Prohibited behaviour includes,
            without limitation, conduct which is unlawful or which may harass or
            cause distress to any person and the submission or transmission of
            content which is defamatory, indecent, discriminatory, offensive,
            abusive, obscene, pornographic, inflammatory, in breach of
            confidence or privacy or which in the opinion of Finquest
            learning&apos;s may cause offence to any person or damage our
            reputation. You must not use any abusive or aggressive language,
            swear, threaten, harass or abuse any other person, including other
            users;
            <br />
            3.4.4 Agree to indemnify, defend and hold harmless Finquest learning
            against any claim, liability, cost, damage, or loss we may incur
            (including without limitation legal fees) as a result of any
            violation by you of the provisions set out above;
            <br />
            3.4.5 Agree to waive any moral rights in your contribution for the
            purposes of its submission to and publication on the Website and
            other purposes specified above.
            <br />
            3.5 You must not intentionally violate any laws, rules or
            regulations.
            <br />
            3.6 No user must post nor recommend any other Website nor refer to
            specific URLs (Website addresses) where those linked Websites would
            infringe any of the above provisions. No user must post any
            advertisement on the Website.
            <br />
            3.7 In using this Website, you agree not to impersonate another
            person or use a false name or a name you are unauthorised to use or
            create a false email address or try to mislead others as to the
            identity or origin of any communication.
            <br />
            3.8 You must not corrupt the site, flood the site with information
            so as to cause the site not to function or use anything which may
            affect the function of the site for example viruses, worms, logic
            bombs or similar. You must not interfere or tamper with, remove,
            delete or otherwise alter in any way, any information which is
            included on the Website.
            <br />
            3.9 Finquest learning reserves the right to fail any messages and/or
            remove any material whatsoever submitted to our Blogs or otherwise
            to the Website for any reason. The Product Folks will not notify the
            contributor of the material of such failure or removal.
            <br />
            3.10 Finquest learning reserves the right to take any action against
            any account or user, at any time, for any reason. We may at our
            discretion terminate your access to the Website or to the
            registration areas of the Web site, or prevent you from submitting
            comments via the Website immediately and without giving you advance
            notice. If you engage in behaviour which breaches these terms and
            conditions, and we consider such behaviour to be serious and/or
            repeated, we may use whatever information is available to us to
            prevent further breaches. If your access to the Website or to
            registration areas of the Web site is terminated, you may not open
            another account with us or register again and we reserve the right
            to terminate any such account or cancel any such registration.
            <br />
            3.11 Should you have any complaint regarding any material published
            on the Website, you can notify us of then a ture and details of your
            complaint by emailing hellofinquest@gamil.com
            <br />
            ‍<br />
            <br />
            <span>
              ‍3. Submission of comments/contributions to the website and
              Finquest&apos;s blogs
            </span>
            <br />
            ‍3.1 You may submit comments to Finquest, including without
            limitation for publication on our Blogs.
            <br />
            3.2 Any comments submitted in connection with our Blogs are
            submitted on the basis that we will review and may edit such
            comments prior to publication on the Website, and that not all
            submissions will be published. Publication is entirely at the
            discretion of Finquest. We accept no responsibility or liability in
            relation to the content of any material posted or published on this
            Web site by third parties or in relation to contributions by third
            parties which we publish on the Web site. You are entirely liable
            for all activities conducted by you or by others authorised by you
            or otherwise on your behalf.
            <br />
            3.3 If and to the extent that you submit any personal data(such as
            your name and email address) to Finquest through the Blogs, Finquest
            confirms that it will only use any such personal data for the
            purposes for which you have provided it.
            <br />
            3.4 Any communications which we receive from you in connection with
            the Blogs and any material that you transmit or post or submit via
            this Web site will be deemed non-confidential and non-proprietary
            and we reserve the right to use the content of such communications
            for any purpose whatsoever. In relation to such contributions you
            grant us a perpetual, royalty-free, non-exclusive, sub-licensable
            right and license to publish, adapt, use, modify ,reproduce, edit,
            and exercise all copyright and publicity rights with respect to such
            work world-wide and/or to incorporate it in other works in any media
            now known or later developed for the full term of any rights that
            may exist in such content, consistent with the privacy restrictions
            set forth in the Privacy Policy. If you do not wish to grant such
            rights to Finquest please do not submit your contribution to this
            Web site. By submitting your contribution to this Website, you also:
            <br />
            3.4.1 Warrant that such contribution is your own original work and
            that you have the right to make it available to us for all the
            purposes specified above;
            <br />
            3.4.2 Warrant that such contribution is not defamatory, does not
            infringe the rights of any third party and does not infringe any
            law;
            <br />
            3.4.3 Agree to use this Website only for lawful purposes and in a
            manner that does not restrict or inhibit the use and enjoyment of
            this Web site by any third party. Prohibited behaviour includes,
            without limitation, conduct which is unlawful or which may harass or
            cause distress to any person and the submission or transmission of
            content which is defamatory, indecent, discriminatory, offensive,
            abusive, obscene, pornographic, inflammatory, in breach of
            confidence or privacy or which in the opinion of Finquest may cause
            offence to any person or damage our reputation. You must not use any
            abusive or aggressive language, swear, threaten, harass or abuse any
            other person, including other users;
            <br />
            3.4.4 Agree to indemnify, defend and hold harmless Finquest against
            any claim, liability, cost, damage, or loss we may incur (including
            without limitation legal fees) as a result of any violation by you
            of the provisions set out above;
            <br />
            3.4.5 Agree to waive any moral rights in your contribution for the
            purposes of its submission to and publication on the Website and
            other purposes specified above.
            <br />
            3.5 You must not intentionally violate any laws, rules or
            regulations.
            <br />
            3.6 No user must post nor recommend any other Website nor refer to
            specific URLs (Website addresses) where those linked Websites would
            infringe any of the above provisions. No user must post any
            advertisement on the Website.
            <br />
            3.7 In using this Website, you agree not to impersonate another
            person or use a false name or a name you are unauthorised to use or
            create a false email address or try to mislead others as to the
            identity or origin of any communication.
            <br />
            3.8 You must not corrupt the site, flood the site with information
            so as to cause the site not to function or use anything which may
            affect the function of the site for example viruses, worms, logic
            bombs or similar. You must not interfere or tamper with, remove,
            delete or otherwise alter in any way, any information which is
            included on the Website.
            <br />
            3.9 Finquest reserves the right to fail any messages and/or remove
            any material whatsoever submitted to our Blogs or otherwise to the
            Website for any reason. Finquest will not notify the contributor of
            the material of such failure or removal.
            <br />
            3.10 Finquest reserves the right to take any action against any
            account or user, at any time, for any reason. We may at our
            discretion terminate your access to the Website or to the
            registration areas of the Web site, or prevent you from submitting
            comments via the Website immediately and without giving you advance
            notice. If you engage in behaviour which breaches these terms and
            conditions, and we consider such behaviour to be serious and/or
            repeated, we may use whatever information is available to us to
            prevent further breaches. If your access to the Website or to
            registration areas of the Web site is terminated, you may not open
            another account with us or register again and we reserve the right
            to terminate any such account or cancel any such registration.
            <br />
            3.11 Should you have any complaint regarding any material published
            on the Website, you can notify us of then a ture and details of your
            complaint by emailing hellofinquest@gmail.com
            <br />
            ‍<br />
            <br />
          </p>
          <br />
          <br />
        </section>
      </div>
    </div>
  );
}
