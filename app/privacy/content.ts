import type { LegalDocument } from "@/components/legal-page"

export const privacyContent: Record<"ja" | "en", LegalDocument> = {
  ja: {
    title: "プライバシーポリシー",
    intro:
      "株式会社siggaze（以下「当社」）は、当社のウェブサイト（siggaze.com およびその配下のページ。以下「本サイト」）および当社の事業活動において取り扱う個人情報について、個人情報の保護に関する法律（以下「個人情報保護法」）その他の関係法令を遵守し、以下のとおり適切に取り扱います。",
    sections: [
      {
        heading: "1. 取得する情報",
        blocks: [
          "当社は、次の情報を適正な手段により取得します。",
          [
            "お問い合わせの際にご提供いただく情報：氏名、会社名・所属、メールアドレス、電話番号、お問い合わせ内容など",
            "取引・業務の遂行に伴いご提供いただく情報：取引先のご担当者の氏名、連絡先、契約・請求に関する情報など",
            "本サイトの閲覧時に自動的に記録される情報：IPアドレス、ブラウザの種類、閲覧日時、参照元URLなどのアクセス情報",
          ],
          "なお、本サイトで公開しているウェブアプリケーションの設定などは、お使いの端末内（ブラウザのローカルストレージ）にのみ保存され、当社のサーバーには送信されません。",
        ],
      },
      {
        heading: "2. 利用目的",
        blocks: [
          "当社は、取得した個人情報を次の目的の範囲内で利用します。",
          [
            "お問い合わせへの回答および必要なご連絡のため",
            "当社サービスの提供、契約の締結・履行、請求・支払いの処理のため",
            "本サイトの運営、安全性の確保、不正アクセスの防止および改善のため",
            "当社のサービス・事業に関するご案内のため（ご本人が希望されない場合を除きます）",
            "法令に基づく対応のため",
          ],
          "利用目的を変更する場合は、変更前の目的と関連性を有すると合理的に認められる範囲内で行い、変更後の目的を本サイトで公表します。",
        ],
      },
      {
        heading: "3. 第三者への提供",
        blocks: [
          "当社は、次の場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供しません。",
          [
            "法令に基づく場合",
            "人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき",
            "公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき",
            "国の機関、地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき",
          ],
        ],
      },
      {
        heading: "4. 業務の委託",
        blocks: [
          "当社は、利用目的の達成に必要な範囲で、個人情報の取扱いの全部または一部を外部に委託することがあります。この場合、委託先を適切に選定し、必要かつ適切な監督を行います。",
        ],
      },
      {
        heading: "5. 外部サービスの利用",
        blocks: [
          "本サイトでは、次の外部サービスを利用しています。これらのサービスの提供に伴い、アクセス情報が各事業者のサーバーで処理されることがあります。",
          [
            "Vercel Inc.（アメリカ合衆国）：本サイトのホスティング",
            "Google LLC（アメリカ合衆国）：Google Fonts による書体の配信（本サイトの一部のページ）",
          ],
          "各事業者における情報の取扱いは、それぞれのプライバシーポリシーをご確認ください。アメリカ合衆国における個人情報の保護に関する制度については、個人情報保護委員会のウェブサイトで公表されている情報をご参照ください。",
        ],
      },
      {
        heading: "6. Cookie等について",
        blocks: [
          "本サイトは現在、アクセス解析や広告を目的とした Cookie その他の追跡技術を使用していません。今後これらを導入する場合は、本ポリシーを改定してお知らせします。",
        ],
      },
      {
        heading: "7. 安全管理措置",
        blocks: [
          "当社は、個人情報の漏えい、滅失または毀損の防止その他の安全管理のため、次の措置を講じます。",
          [
            "組織的安全管理措置：個人情報の取扱いに関する責任者を定め、取扱状況を確認します",
            "人的安全管理措置：役員および従業者に対し、個人情報の適正な取扱いについて周知・教育を行います",
            "物理的安全管理措置：個人情報を取り扱う機器・書類の盗難や紛失を防止する措置を講じます",
            "技術的安全管理措置：アクセス権限の管理、不正アクセスの防止のための措置を講じます",
            "外的環境の把握：外国において個人情報を取り扱う場合は、当該国における個人情報の保護に関する制度を把握したうえで安全管理措置を実施します",
          ],
        ],
      },
      {
        heading: "8. 開示等の請求",
        blocks: [
          "ご本人から、保有個人データの利用目的の通知、開示、訂正・追加・削除、利用の停止・消去、第三者提供の停止、または第三者提供記録の開示の請求があった場合は、ご本人であることを確認したうえで、個人情報保護法の定めに従い遅滞なく対応します。請求は下記のお問い合わせ窓口までご連絡ください。",
        ],
      },
      {
        heading: "9. お問い合わせ窓口",
        blocks: [
          "個人情報の取扱いに関するご質問、ご相談、苦情は、次の窓口までお寄せください。",
          "株式会社siggaze　個人情報お問い合わせ窓口\n代表取締役　鈴木 由信\nメール：yushin.suzuki@siggaze.com\n※当社の所在地は、お問い合わせいただいた場合に遅滞なくお知らせします。",
        ],
      },
      {
        heading: "10. 本ポリシーの改定",
        blocks: [
          "当社は、法令の改正や事業内容の変更などに応じて、本ポリシーを改定することがあります。改定後の内容は、本サイトに掲載した時点から効力を生じます。",
        ],
      },
    ],
    closing: ["制定日：2026年9月25日", "株式会社siggaze"],
  },
  en: {
    title: "Privacy Policy",
    note: "This English version is provided for reference only. In the event of any discrepancy, the Japanese version shall prevail.",
    intro:
      'siggaze Inc. ("we", "us" or "our") complies with the Act on the Protection of Personal Information of Japan (the "APPI") and other applicable laws, and handles personal information obtained through our website (siggaze.com and its sub-pages, the "Site") and our business activities as set out below.',
    sections: [
      {
        heading: "1. Information We Collect",
        blocks: [
          "We collect the following information by lawful and fair means:",
          [
            "Information you provide when contacting us: name, company or affiliation, email address, phone number, and the content of your inquiry",
            "Information provided in the course of business: names and contact details of client representatives, and information related to contracts and invoicing",
            "Information recorded automatically when you visit the Site: IP address, browser type, date and time of access, referring URL and similar access information",
          ],
          "Settings of the web applications published on the Site are stored only on your device (in your browser's local storage) and are not sent to our servers.",
        ],
      },
      {
        heading: "2. Purposes of Use",
        blocks: [
          "We use personal information only for the following purposes:",
          [
            "To respond to inquiries and contact you as necessary",
            "To provide our services, conclude and perform contracts, and process invoices and payments",
            "To operate, secure, protect against unauthorized access to, and improve the Site",
            "To inform you about our services and business (unless you ask us not to)",
            "To comply with laws and regulations",
          ],
          "If we change the purposes of use, we will do so only within a scope reasonably related to the original purposes and will announce the new purposes on the Site.",
        ],
      },
      {
        heading: "3. Provision to Third Parties",
        blocks: [
          "We do not provide personal information to third parties without your prior consent, except in the following cases:",
          [
            "Where required by law",
            "Where necessary to protect a person's life, body or property and it is difficult to obtain your consent",
            "Where especially necessary for improving public health or promoting the sound development of children and it is difficult to obtain your consent",
            "Where necessary to cooperate with a national or local government body (or its contractor) performing duties prescribed by law, and obtaining your consent would likely impede those duties",
          ],
        ],
      },
      {
        heading: "4. Outsourcing",
        blocks: [
          "We may outsource all or part of the handling of personal information to the extent necessary to achieve the purposes of use. In such cases, we select contractors carefully and supervise them appropriately.",
        ],
      },
      {
        heading: "5. External Services",
        blocks: [
          "The Site uses the following external services, in the course of which access information may be processed on the servers of each provider:",
          [
            "Vercel Inc. (United States): hosting of the Site",
            "Google LLC (United States): delivery of typefaces via Google Fonts (on some pages of the Site)",
          ],
          "Please refer to each provider's privacy policy for how they handle information. For information about the personal information protection system in the United States, please refer to the website of the Personal Information Protection Commission of Japan.",
        ],
      },
      {
        heading: "6. Cookies",
        blocks: [
          "The Site currently does not use cookies or other tracking technologies for analytics or advertising. If we introduce them in the future, we will update this Policy accordingly.",
        ],
      },
      {
        heading: "7. Security Measures",
        blocks: [
          "We take the following measures to prevent leakage, loss or damage of personal information:",
          [
            "Organizational: we appoint a person responsible for handling personal information and review how it is handled",
            "Personnel: we inform and train our officers and staff on the proper handling of personal information",
            "Physical: we take measures to prevent theft or loss of devices and documents containing personal information",
            "Technical: we manage access rights and take measures against unauthorized access",
            "Understanding the external environment: when personal information is handled in a foreign country, we implement security measures based on an understanding of that country's personal information protection system",
          ],
        ],
      },
      {
        heading: "8. Requests for Disclosure, etc.",
        blocks: [
          "If you request notification of the purposes of use, disclosure, correction, addition or deletion, suspension of use or erasure, suspension of provision to third parties, or disclosure of third-party provision records concerning your retained personal data, we will respond without delay in accordance with the APPI after verifying your identity. Please submit requests to the contact below.",
        ],
      },
      {
        heading: "9. Contact",
        blocks: [
          "Please direct any questions, requests or complaints regarding the handling of personal information to:",
          "siggaze Inc. — Personal Information Inquiries\nRepresentative Director: Yushin Suzuki\nEmail: yushin.suzuki@siggaze.com\nOur address will be provided without delay upon request.",
        ],
      },
      {
        heading: "10. Changes to This Policy",
        blocks: [
          "We may revise this Policy in response to changes in laws or our business. The revised Policy takes effect when it is posted on the Site.",
        ],
      },
    ],
    closing: ["Established: September 25, 2026", "siggaze Inc."],
  },
}
