import type { LegalDocument } from "@/components/legal-page"

export const termsContent: Record<"ja" | "en", LegalDocument> = {
  ja: {
    title: "利用規約",
    intro:
      "この利用規約（以下「本規約」）は、株式会社siggaze（以下「当社」）が運営するウェブサイト（siggaze.com およびその配下のページ。以下「本サイト」）および本サイト上で提供するウェブアプリケーション、記事その他のコンテンツ（以下あわせて「本コンテンツ」）の利用条件を定めるものです。本サイトをご利用になる方（以下「利用者」）は、本規約に同意したうえでご利用ください。",
    sections: [
      {
        heading: "第1条（適用）",
        blocks: [
          "本規約は、本サイトおよび本コンテンツの利用に関する当社と利用者との間の一切の関係に適用されます。当社が本サイト上で別途定める個別の条件は、本規約の一部を構成します。本規約と個別の条件が異なる場合は、個別の条件が優先します。",
        ],
      },
      {
        heading: "第2条（知的財産権）",
        blocks: [
          "本サイトおよび本コンテンツに含まれる文章、画像、映像、ロゴ、プログラムその他の一切の著作物に関する著作権、商標権その他の知的財産権は、当社または正当な権利者に帰属します。",
          "利用者は、私的使用その他法令で認められる範囲を超えて、当社の事前の許諾なく、これらを複製、転載、改変、配布、公衆送信、販売その他の方法で利用することはできません。",
        ],
      },
      {
        heading: "第3条（禁止事項）",
        blocks: [
          "利用者は、本サイトの利用にあたり、次の行為をしてはなりません。",
          [
            "法令または公序良俗に違反する行為",
            "当社または第三者の知的財産権、プライバシー、名誉その他の権利・利益を侵害する行為",
            "本サイトのサーバーやネットワークに過度な負荷をかける行為、または本サイトの運営を妨げる行為",
            "本サイトへの不正アクセス、プログラムの解析・改変、その他これらに類する行為",
            "当社または第三者になりすます行為、虚偽の情報を提供する行為",
            "その他、当社が不適切と合理的に判断する行為",
          ],
        ],
      },
      {
        heading: "第4条（本コンテンツの提供）",
        blocks: [
          "本コンテンツには、試験的に公開しているものが含まれます。当社は、利用者への事前の通知なく、本コンテンツの内容を変更し、または提供を中断・終了することがあります。",
          "当社は、本コンテンツの正確性、完全性、有用性、特定の目的への適合性について保証するものではありません。",
        ],
      },
      {
        heading: "第5条（免責）",
        blocks: [
          "当社は、本サイトの利用、または本サイトの変更・中断・終了によって利用者に生じた損害について、当社の故意または重大な過失による場合を除き、責任を負いません。",
          "当社の過失（重大な過失を除きます）により利用者に損害が生じた場合、当社は、通常生ずべき直接の損害に限り賠償の責任を負います。ただし、消費者契約法その他の法令により当社の責任が制限されない場合は、この限りではありません。",
          "本サイトから外部サイトへのリンクが含まれる場合、当該外部サイトの内容やその利用によって生じた損害について、当社は責任を負いません。",
        ],
      },
      {
        heading: "第6条（個人情報の取扱い）",
        blocks: [
          "当社は、本サイトの利用を通じて取得した個人情報を、別途定める「プライバシーポリシー」に従って適切に取り扱います。",
        ],
      },
      {
        heading: "第7条（リンク）",
        blocks: [
          "本サイトのトップページへのリンクは、原則として自由に設定いただけます。ただし、当社の信用を損なうおそれのある態様や、当社との提携関係などを誤認させる態様でのリンクはお断りします。",
        ],
      },
      {
        heading: "第8条（本規約の変更）",
        blocks: [
          "当社は、必要と判断した場合、民法の定める定型約款の変更の規定に従い、本規約を変更することがあります。変更する場合は、変更後の内容と効力発生日を本サイトに掲載してお知らせします。",
        ],
      },
      {
        heading: "第9条（準拠法・管轄裁判所）",
        blocks: [
          "本規約は日本法に準拠して解釈されます。本サイトの利用に関して当社と利用者との間で紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
      },
      {
        heading: "お問い合わせ",
        blocks: ["本規約に関するお問い合わせは、yushin.suzuki@siggaze.com までご連絡ください。"],
      },
    ],
    closing: ["制定日：2026年9月25日", "株式会社siggaze"],
  },
  en: {
    title: "Terms of Use",
    note: "This English version is provided for reference only. In the event of any discrepancy, the Japanese version shall prevail.",
    intro:
      'These Terms of Use (the "Terms") set out the conditions for using the website operated by siggaze Inc. ("we", "us" or "our") at siggaze.com and its sub-pages (the "Site"), together with the web applications, articles and other content provided on the Site (collectively, the "Content"). By using the Site, you ("User") agree to these Terms.',
    sections: [
      {
        heading: "Article 1 (Application)",
        blocks: [
          "These Terms apply to all relationships between us and Users regarding the use of the Site and the Content. Any individual conditions we publish on the Site form part of these Terms and prevail over these Terms to the extent of any inconsistency.",
        ],
      },
      {
        heading: "Article 2 (Intellectual Property)",
        blocks: [
          "All copyrights, trademarks and other intellectual property rights in the text, images, video, logos, programs and other works on the Site and in the Content belong to us or their rightful owners.",
          "Users may not reproduce, republish, modify, distribute, transmit to the public, sell or otherwise use them without our prior permission, except as permitted by law, such as for private use.",
        ],
      },
      {
        heading: "Article 3 (Prohibited Conduct)",
        blocks: [
          "When using the Site, Users must not:",
          [
            "Violate laws, regulations or public order and morals",
            "Infringe the intellectual property, privacy, reputation or other rights or interests of us or any third party",
            "Place an excessive load on the Site's servers or network, or otherwise interfere with the operation of the Site",
            "Gain unauthorized access to the Site, or analyze or modify its programs, or engage in similar acts",
            "Impersonate us or any third party, or provide false information",
            "Engage in any other conduct we reasonably consider inappropriate",
          ],
        ],
      },
      {
        heading: "Article 4 (Provision of Content)",
        blocks: [
          "Some Content is published on a trial basis. We may change, suspend or discontinue any Content without prior notice to Users.",
          "We make no warranty as to the accuracy, completeness, usefulness or fitness for a particular purpose of the Content.",
        ],
      },
      {
        heading: "Article 5 (Disclaimer)",
        blocks: [
          "We are not liable for any damage incurred by Users from using the Site, or from any change, suspension or discontinuation of the Site, except where caused by our willful misconduct or gross negligence.",
          "Where damage is caused to a User by our negligence (other than gross negligence), our liability is limited to direct damages that would ordinarily arise. This limitation does not apply where our liability may not be limited under the Consumer Contract Act or other laws.",
          "We are not responsible for the content of external websites linked from the Site or for any damage arising from their use.",
        ],
      },
      {
        heading: "Article 6 (Personal Information)",
        blocks: [
          "We handle personal information obtained through the use of the Site appropriately in accordance with our separate Privacy Policy.",
        ],
      },
      {
        heading: "Article 7 (Links)",
        blocks: [
          "You may generally link to the top page of the Site freely. However, we do not permit links made in a manner that may damage our reputation or suggest a partnership or other relationship with us that does not exist.",
        ],
      },
      {
        heading: "Article 8 (Changes to These Terms)",
        blocks: [
          "We may change these Terms when we consider it necessary, in accordance with the provisions of the Civil Code of Japan on changes to standard terms. We will announce the revised Terms and their effective date on the Site.",
        ],
      },
      {
        heading: "Article 9 (Governing Law and Jurisdiction)",
        blocks: [
          "These Terms are governed by the laws of Japan. The Tokyo District Court shall have exclusive jurisdiction as the court of first instance over any dispute between us and a User relating to the use of the Site.",
        ],
      },
      {
        heading: "Contact",
        blocks: ["For inquiries about these Terms, please contact yushin.suzuki@siggaze.com."],
      },
    ],
    closing: ["Established: September 25, 2026", "siggaze Inc."],
  },
}
