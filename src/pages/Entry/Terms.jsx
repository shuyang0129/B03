import React, { useContext } from 'react'
import styled from 'styled-components'
// context
import { EntryContext } from './EntryContext'
// assets
import iconClose from '@assets/images/entry/button_close_bold.png'

const StyleTerms = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  z-index: ${({ theme }) => theme.zIndex.fixLayer};
  .title {
    position: relative;
    padding: 13px 0;
    background: #fff;
    font-size: 18px;
    color: #414655;
    font-weight: bold;
    text-align: center;
    .close {
      position: absolute;
      left: 15px;
      top: 8px;
      display: block;
      width: 25px;
      height: 25px;
      background: url(${iconClose}) center center no-repeat;
      background-size: 100% auto;
    }
  }
  .content {
    position: absolute;
    left: 0;
    top: 54px;
    bottom: 0;
    width: 100%;
    padding: 10px 15px;
    background: #fff;
    overflow: auto;
    dl {
      margin-bottom: 30px;
      dt {
        margin-bottom: 10px;
        font-size: 16px;
        color: #414655;
        font-weight: bold;
      }
      dd {
        margin-bottom: 15px;
        font-size: 14px;
        color: #000;
        line-height: 1.5;
        a {
          color: #136fef;
          text-decoration: underline;
        }
      }
    }
  }
`

const Terms = () => {
  const { terms, setTerms } = useContext(EntryContext)

  //相關條款
  const termsTemplate = () => {
    return (
      <>
        <dl>
          <dd>
            <p>为了让您每一天都能尽情享受亚博娱乐提供的最佳服务与体验。</p>
            <p>
              亚博提醒您：在使用亚博提供的服务前，请您务必仔细阅读并透彻理解本服务条款。如果您不接受以下服务条款，请您切勿在亚博进行注册或游戏。
            </p>
            <p>如果您使用亚博提供的服务，您的使用行为将被视为对本服务条款全部内容的认可。</p>
          </dd>
        </dl>
        <dl>
          <dt>定义</dt>
          <dd>
            （一）：以下条规适用于用户使用、连接和参与不时由亚博(统称 " 亚博 "、"我们" 及 "我们的", 视具体情况而定) 通过
            <a href='https://www.yabo394.com' target='_blank' rel='noopener noreferrer'>
              https://www.yabo394.com
            </a>
            经营的其他网站 ("游戏网站") 提供的网上 "玩真钱" 模式的游戏服务 ("游戏服务")。本条规须与特定游戏的游戏规则
            (统称 "游戏规则") 及适用于游戏服务和游戏软件的使用及与连接进入游戏网站和其中所含游戏信息的其他条规 (统称
            "本条规") 一并阅读。
          </dd>
          <dd>
            （二）："游戏" 就本条规而言, 包括但不限于通过游戏网站提供的任何游戏服务进行的投注、游戏及各类游戏活动;
            "连接设备" 指任何应用连接设备,
            包括但不限于为使用和连接游戏网站、参与游戏服务而采用的个人电脑、笔记本电脑、移动电话、个人数码助理、PDA电话、手提设备。"游戏软件"
            指经监管机关批准的、安装在用户连接设备上的电脑程序、数据文件或任何其他资讯及信息内容
            (包括与之有关的任何用户信息), 以便用户通过用户连接设备使用、连接和参与在游戏网站上提供的游戏服务; "体育游戏"
            指游戏网站下 "体育游戏" 链接或标题项下接入或提供的互联网游戏系统, 及所有与其相关的服务和网上游戏活动。
          </dd>
        </dl>
        <dl>
          <dt>同意</dt>
          <dd>
            （三）：用户在注册过程中已阅读"相关条款和隐私政策",
            勾选相关按钮点击注册后即表示用户确认并同意本条规及本条规构成用户与亚博之间关于游戏服务使用的具有法律约束力的协议
            ("使用协议")。
          </dd>
          <dd>
            （四）：如果用户不同意本条规中的任何条款, 请不要点击勾选"我已阅读并同意相关条款与隐私政策" 按钮后进行注册,
            不要试图使用或继续使用任何游戏服务或下载安装游戏软件。
          </dd>
        </dl>
        <dl>
          <dt>修改</dt>
          <dd>
            （五）：我们保留不时修订、更新和修改本条规和游戏规则 (或其任何部分)
            的绝对权利。上述任何修订、更新或修改将在游戏网站上公布。经修订、更新或修改的本条规和游戏规则于其在游戏网站上公布时生效。用户在上述修订、更新或修改公布之后继续通过游戏网站和游戏设备使用、连接和参与游戏服务,
            视为用户同意并接受所公布的经修改或更新的本条规和游戏规则。
          </dd>
          <dd>
            （六）：用户确认并同意,
            用户自行负责查阅上述修订、更新或修改的内容。亚博可自主决定将上述修订、更新或修改的内容通知用户。上述修订、更新或修改的内容可由亚博自主决定不时通知用户,
            但亚博并无任何义务向用户通知上述更新或修改的内容。
          </dd>
        </dl>
        <dl>
          <dt>游戏资讯和知识产权</dt>
          <dd>
            （七）：通过游戏网站、游戏服务、游戏设备或任何其他方式提供、向用户公开、可被用户获取、产生或收集的信息、资料和数据,
            包括但不限于营销计划和资料、成绩、统计数据、赛事数据和赛程表、概率和投注数据、文字、图标、音像资讯
            ("游戏资讯"), 属于亚博和亚博的许可人所有, 仅供用户用于个人非商业性目的。
          </dd>
          <dd>
            （八）：除在本条规中明文规定的外, 未经我们或第三方资料专有人的事先书面同意,
            用户不得以任何方式或手段改编、拷贝、修改、复制、储存、散发、展示、公开播放、制入有线节目、出版、传送、出售、出借、出租、许可使用游戏资讯或以其他方式使得任何他人或其他网站、网上服务或公告板或任何其他媒体或连接设备可以获得、使用、连接上述游戏资讯。
          </dd>
          <dd>
            （九）：在游戏网站或通过连接设备提供的游戏软件、游戏服务和游戏资讯享受著作权、商标和其他形式的知识产权和专利保护。游戏网站上的游戏软件、游戏服务和游戏资讯的所有权利、产权和利益均属亚博或亚博许可人所有、许可其使用或受其控制。用户确认,
            用户并未通过使用或连接在游戏网站或通过连接设备提供的游戏软件、游戏服务和游戏资讯取得上述游戏软件、游戏服务和游戏资讯的任何权利、利益或许可。
          </dd>
        </dl>
        <dl>
          <dt>使用条件</dt>
          <dd>
            作为使用游戏服务的条件, 用户保证并承诺,
            用户不得以任何违反适用于用户的任何法律、违反本条规或被本条规所禁止的目的使用或连接游戏网站、游戏服务、游戏软件或游戏资讯。除了本条规中所列一切其他声明和保证之外,
            用户在此进一步保证并承诺, 作为使用游戏服务的条件:
          </dd>
          <dd>1. 您并非居住在菲律宾, 台湾, 美国, 新加坡以及香港。</dd>
          <dd>2. 用户以本人的身份及名义进行活动, 而非代他人进行交易。</dd>
          <dd>3. 用户的法律行为能力不受限制。</dd>
          <dd>4. 用户未被诊断或认定为游戏强迫症。</dd>
          <dd>
            5. 用户年龄 (a) 至少已满18周岁; 或 (b) 已满任何适用于用户的法律所规定的其他法定年龄或成人年龄, 以较大者为准
            (“法定年龄”)。
          </dd>
          <dd>6. 用户充分了解在使用游戏服务的过程中亏损资金的风险。</dd>
          <dd>7. 用户存入的款项并非来源于犯罪或其他非法、未经授权或许可的活动。</dd>
          <dd>
            8. 用户并非从事犯罪或其他非法、未经授权或许可活动或企图利用用户在亚博开立的账户从事上述活动;
            用户不得利用或允许他人利用游戏服务或用户的游戏账户从事适用于用户或我们的任何法律所规定的任何犯罪或其他非法活动,
            包括但不限于洗钱。
          </dd>
          <dd>
            9. 对用户的户名、账号和密码予以保密, 防止非法连接或使用,
            在户名、账号或密码以任何方式失密的情况下立即更改密码或通知我们。
          </dd>
          <dd>
            10. 对以用户的户名、账号和密码通过游戏网站或连接设备和使用游戏服务的任何及所有活动自行承担责任,
            不论上述连接或使用是否经用户授权或为用户所知晓。
          </dd>
          <dd>
            11.
            不以任何干扰或可能干扰其他用户使用游戏服务和游戏网站的方式使用游戏服务、游戏网站、连接设备、游戏软件和游戏资讯,
            不实施任何降低或可能降低游戏服务和游戏网站运行效能的行为。
          </dd>
          <dd>12. 不征集或以任何方式企图获取有关其他用户的任何资料。</dd>
          <dd>
            13.
            不上传或散发任何含有病毒、已经毁坏或可能影响连接设备、游戏软件、游戏服务或游戏网站运行效能的程序、文件或数据。
          </dd>
          <dd>
            14. 用户通过游戏网站或连接设备或使用游戏服务和游戏资讯不违反适用于用户的法律;
            亦不违反对用户个人或用户目前连接游戏网站或使用连接设备所在国家所有人具有约束力的合约义务;
            同时不受上述法律或合约义务禁止。
          </dd>
          <dd>
            15.
            不使用任何设备、机械、装置、软件、程序或其他方法(或任何具有上述性质的事物)干扰或企图干扰游戏服务、连接设备、游戏软件、游戏网站、游戏资讯或游戏网站或连接设备提供的任何交易的正常运行。
          </dd>
          <dd>
            16.
            不向游戏网站或连接设备或任何其他用户发布或传送任何违法、骚扰性、侮辱性、威胁性、诬蔑性、诽谤性、淫秽、猥亵、煽动性、种族歧视、色情或粗俗的内容,
            或可构成或教唆犯罪、引发民事责任或以其他方式违反任何法律的内容。
          </dd>
          <dd>
            17. 用户不是亚博或其任何关联公司的管理人员、董事、雇员、顾问、关联人或代理人,
            或与上述任何人员具有亲属或同屋居住关系。
          </dd>
          <dd>
            18.
            不干扰其他用户使用游戏服务、游戏网站、游戏软件、连接设备或游戏资讯或发起或参与调查、竞赛、连锁信或发布或传送“垃圾邮件”或其他未受请求的群发邮件。
          </dd>
        </dl>
        <dl>
          <dt>注册开立游戏账户和会员资格</dt>
          <dd>
            1. 欲通过亚博参与游戏、使用游戏服务, 用户须按游戏网站所述程序完成开立账户和会员资格的申请 (“会员资格申请”)。
          </dd>
          <dd>
            2. 用户声明并承诺, 用户在注册和办理会员资格申请时所提供的所有资料, 包括会员资格申请所填用户姓名
            (“姓名”)、资金来源 (包括有关银行账号和卡号) 和住址, 在一切方面均真实、准确、完整。
          </dd>
          <dd>
            3.
            亚博将采取必要和适当的措施对用户向我们披露的个人资料予以保密。我们将对所收到的用户个人数据和投注资料予以严格保密,
            除非法律、法规、规章、法院或监管机关或任何有关游戏管理或执法机关的命令或决定或本条规另有规定要求披露。用户对其个人资料的保密自行承担责任。我们保留在完成游戏网站所提供的游戏服务的付款手续所需的范围内向我们支付结算服务提供者和金融机构披露用户个人数据的权利。
          </dd>
          <dd>
            4.
            用户还须自行负责确保用户使用和连接游戏网站和其中所含的游戏资讯、下载安装游戏软件或使用和参与游戏服务不受适用于用户的法律禁止。
          </dd>
          <dd>
            5. 为验证用户的会员资格申请, 我们还需要用户提供身份和年龄证明
            (如带照片的有效身份证明和借记卡或信用卡)。用户提供的具体原始资料如有任何变更,
            应及时通知我们。为确认用户的姓名和地址,
            亚博保留通过邮寄等方式确认用户姓名和地址的权利。亚博还可自行决定采用其他安全措施核实用户提供的任何资料。用户同意本条规,
            即同时表示同意亚博连接、使用、处理和储存对用户的任何身份验证或核实结果。
          </dd>
          <dd>
            6.
            我们保留基于任何理由拒绝用户会员资格申请的绝对权利。我们仅对在线即时帮助所公布的亚博官方备用网站负责。会员登录其它任意貌似亚博网站的链接,
            所造成的任何损失我们将不承担任何责任。如有其他疑问, 请直接联络在线客服。
          </dd>
          <dd>
            7. 用户在亚博仅可开立一个账户。若我们发现用户在 亚博开设不止一个账户, 我们保留自行决定将用户在
            亚博的所有账户作为一个合并账户处理、取消多余账户或与用户终止本协议的权利。
          </dd>
        </dl>
        <dl>
          <dt>下注及接受下注</dt>
          <dd>
            1.
            我们于游戏网站上或通过连接设备所不时提供的游戏、体育赛事和其他游戏活动开放给用户下注。用户下注须遵守具体游戏或游戏活动的游戏规则以及本条规的规定。若任何赌局出现明显错误或显示错误的参赌人,
            该赌局的所有下注均告作废。亚博游戏系统发生故障时, 亚博亦有权宣布任何或所有下注无效。
          </dd>
          <dd>2. 尽管本条规可能存在其他规定, 但亚博有权基于任何理由酌情拒绝用户的全部或部分下注。</dd>
          <dd>
            3. 我们仅接受用户按本条规通过互联网或连接设备进行下注。其他下注形式 (邮寄、电邮、传真等)
            一概不予接受。我们即使收到其他形式的下注, 不论赌盘最后开出的结果如何,
            均视为无效。亚博有权搁置或拒绝疑用欺骗手段如通过攻击、操纵等破坏操作系统所进行的投注。任何不寻常的投注将被取消,
            而不需另行通知。特此声明, 人工智能或软件 (机器人 "bots") 于线上投注服务的使用是被严禁的行为,
            而任何试图或利用该方式的投注将被取消, 相关账号立即会被关闭。
          </dd>
          <dd>4. 受限于本条规其他规定, 用户输入正确的用户名和密码且账户内存有足够余额, 用户即有效投下注码。</dd>
          <dd>
            5. 用户均须对使用下列内容 (或其各项结合) 所进行的所有活动和交易负责 (无论下述使用是否得到授权): 1）用户姓名;
            2）用户账户号; 3）用户的用户名和密码。
          </dd>
          <dd>
            6. 用户自行负责确保其下注细节的准确性。受限于本条规其他规定, 一旦用户下注且我们确认接受用户的下注,
            即为用户下注的最终确证; 用户不得取消、撤回下注或更改下注细节。
          </dd>
          <dd>7. 所有下注均收录于交易记录数据库。亚博的交易记录为所有交易及下注的相关信息的最终确证。</dd>
          <dd>
            8. 受限于本条规其他规定, 当交易代号出现在用户屏幕上并有效显示在用户的交易历史中时, 下注即视为有效及被
            亚博接受。
          </dd>
          <dd>
            9.
            比赛开始后或下注时比赛结果已被知晓之情况下不得下注。若比赛开始或用户下注时已经知晓比赛结果之情况下仍错误地开放给用户下注,
            亚博有权不经通知用户即可拒绝用户下注或宣布下注无效;
            亚博享有是否接受全部或部分该等下注的自主决定权。为避免疑义, 本条款不排除 "下半场" 投注盘 ("in play" bets) 或
            "半场" 投注盘 ("half time" bets)。
          </dd>
          <dd>
            10. 游戏网站上预告的开赛时间仅为信息参考之用。若亚博因任何原因无意中于比赛开始后仍接受下注,
            则亚博有权取消和宣布该等下注无效。
          </dd>
          <dd>
            11. 除非有关比赛和游戏的具体规则另有规定, 否则为了游戏的目的,
            开放下注的比赛或游戏的结果将于比赛或游戏实际结束当天决定。亚博不承认任何后来的可能导致推翻上述结果的质询,
            原派彩仍然有效。
          </dd>
          <dd>12. 体育赛事的比赛地点发生变化的, 以原赛场为基础的所有下注均告无效。</dd>
          <dd>13. 比赛或游戏的赢家将根据游戏规则在上述比赛或游戏实际结束当天予以决定。</dd>
          <dd>14. 为游戏目的, 亚博不承认任何延期比赛、抗议或推翻的结果。</dd>
          <dd>15. 用户下注的多重彩中如包括非参赛者选项或无效选项, 派彩将以剩余的有效选项为基础进行结算。</dd>
          <dd>
            16. 用户承认所有赔率、指数和让分可不经通知上下浮动, 上述赔率、指数和让分仅在用户下注被我们接受时予以确定。
          </dd>
          <dd>
            17. 若明显错误或系统故障造成用户下注的赔率、指数或让分不正确时,
            则用户的下注或多重彩的部分下注无效。若有关错误或故障及时得到纠正，亚博有权自主 (但无义务)
            决定尽合理努力和用户联络允许用户以正确的赔率、指数和让分重新下注。
          </dd>
          <dd>18. 我们不接受用户同时对同一赛事重复下注。</dd>
          <dd>19. 就任何下注及其相关交易而言, 亚博享有最后决定权, 且其所作决定系终局性并具有最终确定力的。</dd>
        </dl>
        <dl>
          <dt>游戏软件使用权</dt>
          <dd>
            1. 用户特此确认并同意,
            用户通过连接设备以下载或其他方式获得的以便其远程使用的游戏网站的游戏软件属于游戏服务的一部分,
            为亚博或亚博的许可人的财产;
            用户对该等游戏软件不享有任何权利。用户不得以任何方式或以任何手段改编、拷贝、修改、复制、储存、散发、展示、公开播放、传播、广播、制入有线节目、出版、传送、出售、出借、出租、许可使用游戏软件或以其他方式交流或使游戏软件对任何他人或其他网站、网上服务或公告板或任何其他媒体或连接设备开放。
          </dd>
          <dd>2. 亚博授权和散发游戏软件的目的仅为游戏软件的终端用户能完全连接和使用游戏服务。</dd>
          <dd>
            3. 用户不得:
            1）安装或传载游戏软件至其他连网设备的服务器或采取其他步骤使游戏软件可以通过任何形式或公告板、网上服务或远程拨号或网络使他人得到;
            2）散发、出借、出租、转授权、拷贝、转让、转移或以其他方式使任何其他人得到游戏软件或使用游戏软件的使用权;
            3）允许其他人使用游戏软件; 4）设立或提供任何方式 (包括但不限于仿真程序) 使他人使用游戏软件;
            5）翻译、反向工程、反向编译, 反汇编、修改、破解、全部或部分地以游戏软件或其源代码为基础开发衍生产品;
            6)拷贝、修改、翻译或全部或部分地以游戏软件的相关用户文件为基础开发衍生产品。
          </dd>
          <dd>
            4. 用户承认并同意,
            游戏网站上提供的及或通过联连设备或其他方式提供的游戏软件或游戏软件均归亚博和亚博许可方所有,
            并受著作权、商标权和其他知识产权和专利权的保护。用户特此承认,
            游戏软件的结构、组织和源代码为亚博和亚博许可人的极具价值的商业秘密。用户承认除根据使用权向用户授予的权利外,
            用户对游戏软件或游戏软件用户文件不享有任何权利和权益。
          </dd>
          <dd>
            5. 本协议因任何原因终止, 本协议顶下所授予的使用权自动作废,
            用户应停止使用游戏软件并将游戏软件从联连设备中卸载。
          </dd>
        </dl>
        <dl>
          <dt>交易结算</dt>
          <dd>
            1. 用户使用信用卡或借记卡的,
            持卡人姓名须与会员登记和申请过程中所使用的姓名一致。若发生持卡人姓名和账户登记和会员申请所使用的姓名不一致的情况,
            亚博有权拒绝就相关交易进行结算。
          </dd>
          <dd>
            2. 用户承担向亚博或其他用户 (视具体情况而定)
            支付所有应付款项的一切责任。用户同意对任何付款不实施或促使他人实施退款, 不拒绝或撤销付款,
            并向亚博偿付所有被退还、拒绝或撤销的付款以及由此引起的所有损失和费用。亚博根据自主判断,
            有权终止向个别用户或使用某类信用卡或借记卡付款的用户提供服务或支付款项。
          </dd>
          <dd>
            3.
            所有比赛项目或投注种类，每日每位会员可得最高派彩金额是150万美金（不包括投注本金），或其他等值货币。以下列出个别体育的最高派彩金额为参考：
          </dd>
          <dd className='indent'>
            <p>（1）足球与篮球 –150万美金或其他等值货币</p>
            <p>（2）网球，美式足球，棒球，冰球，橄榄球，排球 –30万美金或其他等值货币</p>
            <p>（3）其他体育 – 20万美金或其他等值货币</p>
            <p>（4）新颖盘口 –2万5千美金或其他等值货币</p>
            <p>（5）连串过关如果涉及不同体育级别的限制，系统将以体育级别最低派彩金额限制为准。</p>
          </dd>
          <dd>
            4. 娱乐场 (Casino) 下注向任何会员支付的最高彩金为美金 600,000
            (或我们根据我们银行所公布的汇率不时确定的其他等额货币。) 金融 (Financials)
            下注向任何会员支付的最高彩金为美金 180,000 (或我们根据我们银行所公布的汇率不时确定的其他等额货币。)
          </dd>
          <dd className='indent'>
            <p>（1）足球与篮球 –150万美金或其他等值货币</p>
            <p>（2）网球，美式足球，棒球，冰球，橄榄球，排球 –30万美金或其他等值货币</p>
            <p>（3）其他体育 – 20万美金或其他等值货币 </p>
            <p>（4）新颖盘口 –2万5千美金或其他等值货币</p>
            <p>（5）连串过关如果涉及不同体育级别的限制，系统将以体育级别最低派彩金额限制为准。</p>
          </dd>
          <dd>5. 彩金不包括下注额, 用户在下注时应考虑这一因素。</dd>
          <dd>
            6. 彩金将存入用户账户。任何款项或彩金在存入帐户的过程中发生错误, 亚博 不负任何形式的任何责任, 且
            亚博有权在任何时候或在事后宣布涉及该等款项的交易无效。用户一旦发现账户内款项汇存有误, 有责任立即通知 亚博。
          </dd>
          <dd>7. 在任何适用法律下就彩金所应缴付的税款和费用均由用户自行负责缴付。</dd>
        </dl>
        <dl>
          <dt>领取彩金</dt>
          <dd>
            1. 用户的彩金经结算后, 将存入用户账户,
            具体提取办法参照我们彩金提取规定并须出示我们认可的有效带照身份证或信用、借记卡。
          </dd>
          <dd>
            2. 在用户所持的信用卡或借记卡发行银行允许的情况下,
            彩金可以直接存入用户交纳押金所用的信用卡或借记卡账户。支票或电汇的收款人以登记或申请会员时所用的姓名为准。以信用卡或借记卡支付押金的,
            收款人还必须是信用卡或借记卡的登记持卡人。
          </dd>
        </dl>
        <dl>
          <dt>促销和奖励</dt>
          <dd>
            1.
            所有促销、奖励和特价均须遵守本条规及亚博针对具体促销活动所不时制定的规定。亚博保留在任何时候中止、取消或修改该等奖励或促销或其相关规定及条款的权力。
          </dd>
          <dd>
            2. 若亚博认定有人滥用或企图滥用某项奖励或促销活动, 或可能因该等滥用行为而获利,
            亚博有权自主决定以其认为合适的方式阻止、拒绝, 中止、或撤消任何用户参加有关奖励或促销活动。
          </dd>
        </dl>
        <dl>
          <dt>赔偿</dt>
          <dd>
            用户同意,
            由于用户连接游戏网站、下载或安装游戏软件、下注或以其他方式使用游戏服务、游戏软件或游戏资讯、或违背本条规或游戏规则,
            而对亚博、亚博的股东、雇员、管理人员、董事、受许可方、经销商、关联方、子公司或代理商造成的任何损失、损害或及索赔
            (包括合理的律师费), 用户须予以全额赔偿。
          </dd>
        </dl>
        <dl>
          <dt>免责声明及特别注意事项</dt>
          <dd>
            1. 游戏完全是一项个人选择, 以个人判断与分析为依据, 且风险自负的行为。用户下注的同时,
            即表明用户承认游戏服务、游戏网站和游戏资讯并无冒犯性,
            且并不令人反感、不公平或有悖公共道德。一些司法管辖区对网上或岸外网上游戏的合法性尚无定论;
            而另一些司法管辖区则明确规定网上游戏 (在司法管辖区域内或岸外)
            均属非法行为。我们不鼓励任何人在非法的情况下使用和连接游戏网站、游戏资讯或游戏服务。游戏服务、游戏资讯和游戏网站的设立和提供并不构成我们发出要约、招揽或邀请任何人在那些规定使用或连接上述内容为非法行为的国家内使用或连接上述内容。用户独立承担遵守其所适用之相关法律规定的责任,
            而亚博不就游戏服务、游戏软件、游戏网站或其中的游戏资讯与用户所适用的法律规定相符作出任何声明。
          </dd>
          <dd>
            2. 游戏服务、游戏软件、游戏网站和游戏资讯均按 "原状原则" 提供。除本条规明示的外,
            亚博不就游戏服务、游戏网站、游戏软件和游戏资讯作出任何声明或保证。故所有有关游戏服务、游戏软件、游戏网站和游戏资讯的声明或保证,
            不论明示或暗示、法定与否,
            特此在法律允许的最大范围内予以排除。亚博不就游戏服务、游戏软件、游戏网站或游戏资讯的准确性、及时性、安全性、连续性、正确性或抗外界干扰性
            (任何性质),
            以及更正所发现的任何缺陷作出保证。亚博亦不保证游戏服务、游戏软件、游戏网站和游戏资讯或提供上述内容的服务器不含有任何病毒、间谍软件、广告软件或其他具恶意性、破坏性或可导致电脑瘫痪的代码、程序、数据、宏指令或可影响任何连接设备或其中所存数据的其他软件或特性。用户承诺将自行自费采取预防措施,
            确保其使用或连接游戏服务所用的过程、方法或连接设备、以及游戏软件的安装和游戏网站的使用,
            均不会带来电脑病毒、间谍软件、广告软件或具恶意性、破坏性或可导致电脑瘫痪的其他代码,
            或导致其连接设备或其中所存数据受到干扰和破坏的其他风险。
          </dd>
          <dd>
            3. 若发生与账户结算或游戏服务的其他方面有关的系统错误或通讯错误, 亚博不承担由此引起的任何责任。在此情况下,
            亚博有权取消所有受上述错误影响的下注并采取任何更正行动。
          </dd>
          <dd>
            4. 在任何情况下, 因用户连接、使用或参与游戏服务、游戏网站、游戏软件和游戏资讯而发生任何损害、损失或支出,
            包括用户之连接设备或所存数据受到任何干扰或破坏, 亚博不承担任何责任。此外,
            对游戏服务、游戏网站、游戏软件和游戏资讯中由第三方 (包括但不限于宽带和电信服务供应商) 所提供的内容,
            亚博亦不作任何保证和声明且不予负责; 在任何情况下,
            亚博均不对上述第三方合作者的任何违约、过错或不作为承担责任。
          </dd>
          <dd>
            5. 在任何情况下, 亚博、其关联公司、关联方、合伙人、管理人员、雇员和代理均不对任何损害、损失或支出承担责任,
            包括但不限于因用户连接或使用游戏服务、游戏网站、游戏软件和游戏资讯、或与用户连接或使用游戏服务、游戏网站、游戏软件和游戏资讯有关的、或因用户下载、安装或使用游戏软件所引起的任何直接、间接、因果性或特别的损害或经济损失,
            不论亚博是否被告知可能发生上述损害、损失或支出。在任何情况下,
            就与用户下注直接相关的任何事宜、事件或情形所引起或与之相关的任何损失或损害
            (不论是否基于合约、侵权、严格责任或其他原因), 在法律允许的最大范围内, 亚博对用户的全部责任 (如有)
            应不超过用户的相应下注额。
          </dd>
          <dd>
            6. 用户承认, 游戏资讯在性质上可能全部或部分地具有临时性, 并且可按本条规予以修订、修改或更改。因此,
            用户承认游戏资讯仅为参考之用, 不构成任何建议、意见或招揽,
            不构成任何具约束力的声明、保证、合约义务或用户依据的内容和基础。
          </dd>
          <dd>
            7. 用户特此承认并同意, 在考虑所有相关因素, 包括但不限于用户向 亚博提供对价的价值后,
            本条规所述之所有责任豁免和义务排除代表用户和
            亚博协议中公平、合理的风险分担和利益分配。用户进一步同意上述免责和限制在适用法律允许的最大范围内具有强制执行力。
          </dd>
          <dd>
            8. 如果用户对任何游戏或比赛的结果存有异议, 应在该等结果宣布之日后十四 (14)
            天内向我们书面投诉。若出现用户连接设备所显示与亚博系统的交易记录中所存的交易结果不符的情况
            (尽管发生这种情况的可能性很小),
            用户同意亚博系统中交易记录所记载的由我们的技术总监认证的交易结果应为该等结果具终局性的不容置疑的证据。
          </dd>
          <dd>
            9. 亚博承诺提供公正和及时的争议解决方案,
            纠正不需费用。所有顾客的交易详情都会完整的储存于我们的资料库。这些记录存档为 5 年 (从交易日期算起),
            并在纠纷解决机构的需求中提供。
          </dd>
        </dl>
        <dl>
          <dt>终止、关户及暂停游戏服务</dt>
          <dd>
            1. 亚博如有充分理由相信或证明以下情形, 除本条款项下 亚博所享有的其他权利外, 亚博有权, 根据自主判断,
            宣布任何彩金无效并没收用户下注账户中所存余额、终止本协议或暂停提供游戏服务/冻结用户账户:
          </dd>
          <dd className='indent'>
            <p>（1）用户在亚博拥有不止一个活动账户;</p>
            <p>（2）用户姓名与向亚博进行购卖或支付押金所用的信用卡或借记卡或其他付款账户的持有人姓名不符;</p>
            <p>（3）用户参与亚博促销并在未满足促销要求之前退出该促销;</p>
            <p>（4）用户提供不正确或误导性的注册信息;</p>
            <p>（5）用户未提供或遗漏提供必要的身份资料;</p>
            <p>（6）用户不满法定年龄;</p>
            <p>（7）用户连接和使用游戏服务所在的地区在法律上禁止使用游戏服务;</p>
            <p>（8）用户对我们实施或促使他人对我们实施 "退款", 或否认以其账户名义进行的任何交易或押金;</p>
            <p>（9）用户押金来源于刑事犯罪或其他非法或未经授权的活动;</p>
            <p>
              （10）用户被发现欺诈或企图欺诈任何人或已经对任何人实施欺诈,
              或经亚博认定用户使用专门设计用以干扰/捣毁系统之人工智能或其他系统 (包括机械、电脑、软件或其他自动化系统),
              或被发现与其他游戏玩客勾结或企图与其他赌客勾结欺骗亚博或其他游戏玩客;
            </p>
            <p>（11）用户允许 (不论是否故意) 他人使用其账户;</p>
            <p>（12）用户未遵守本协议项下的任何使用规定;</p>
            <p>
              （13）或用户未告知其身在菲律宾、台湾、美国、新加坡、香港、法国、瓜德罗普、盖亚那、马提尼克和留尼旺境内的事实。
            </p>
          </dd>
          <dd>
            2. 若我们规定暂停提供游戏服务或冻结账户, 在用户实施必要的纠正措施 (如可以纠正),
            且我们确认完全满意用户的纠正措施之后, 游戏服务和用户账户将被恢复和解冻。
          </dd>
        </dl>
        <dl>
          <dt>与外部网站的链接</dt>
          <dd>
            1. 游戏网站可能含有与并非亚博维护的外部网站的链接。与外部网站的链接仅为用户方便而提供,
            亚博不承诺确保上述链接所含内容的准确性、时效性或被维护, 且不就此承担任何责任。
          </dd>
          <dd>
            2.
            亚博不就外部网站的内容资讯或隐私保护政策或在外部网站宣传、出售或以其他方式开放的任何产品或服务承担任何责任、负责提供或审查、予以批准或核准、或作出任何声明或保证。
          </dd>
          <dd>
            3.
            亚博不因用户使用游戏网站所提供的任何外部网站链接而发生的或与之相关的任何损失或损害而承担合约，侵权，疏忽或其它责任。
          </dd>
          <dd>
            4. 除非明文规定,
            否则亚博在任何情况下均不得被视为与外部网站上的任何声明、意见、产品或服务商标、标记、标志或其他图案、在外部网站宣传、出售或以其他方式开放的任何产品或服务、外部网站的经营者或所有者、或以任何方式与外部网站相关的任何人具有任何关系或联系。
          </dd>
        </dl>
        <dl>
          <dt>与游戏网站的链接/框入</dt>
          <dd>
            用户不得就游戏网站或游戏服务的任何部分设置链接、深链接或文中链接 (deep or in-line links)、或框入 (frame)
            游戏资讯。
          </dd>
        </dl>
        <dl>
          <dt>增加或中断游戏种类</dt>
          <dd>
            我们保留自行决定, 不经通知用户, 于任何时候在游戏网站增加新的游戏种类或功能,
            或开始、停止、中断、限制连接或修改任何游戏种类或功能的权利, 且不就此对任何人承担任何责任。
          </dd>
        </dl>
        <dl>
          <dt>违反本条规</dt>
          <dd>
            亚博保留就违反本条规的行为依法寻求救济 (法律及衡平法) 的权利,
            包括自行决定在任何时候基于任何理由拒绝或限制任何特定的人连接游戏服务、游戏网站和游戏资讯、阻止通过特定互联网地址或连接设备连接游戏服务、游戏网站和游戏资讯的权利。
          </dd>
        </dl>
        <dl>
          <dt>优先顺序</dt>
          <dd>
            游戏规则 (若适用)
            和适用于使用和连接游戏服务、游戏软件、游戏资讯和游戏网站的任何其他条规均构成本条规的组成部分。
          </dd>
          <dd>
            若游戏规则和适用于使用和连接游戏服务、游戏软件、游戏资讯和游戏网站的任何其他条规与本条规存有抵触,
            则除非另行明文规定, 否则以本条规为准。
          </dd>
        </dl>
        <dl>
          <dt>不可抗力</dt>
          <dd>
            若亚博由于发生下列其无法控制的任何性质的事件
            (包括但不限于天灾、适用法律法规的变更、政府、民政或军事机关的作为或不作为、法院命令、恐怖活动、闪电或火灾、罢工、停工或其他劳资纠纷、洪水、干旱、战争、暴乱、盗窃、传输或系统故障、通讯或宽带服务故障或中断、电力供应或设备故障或不足、恶劣气候、地震和自然灾害)
            未能或迟延履行本条规所规定的任何义务, 不构成违反本条规。用户同意采取一切必要行动尽量减轻上述事件的后果。
          </dd>
        </dl>
        <dl>
          <dt>弃权</dt>
          <dd>
            亚博 在任何时候未能执行本条规任何条款不可视为
            亚博放弃本条规所规定的权利或以任何方式影响本条规全部或部分的有效性, 且不影响亚博采取进一步行动的权利。
          </dd>
        </dl>
        <dl>
          <dt>可分割性</dt>
          <dd>
            若任何条款或其任何部分被有关机关认定为在任何程度上无效、不合法或不可执行,
            则该条款或该部分在上述程度上与其他条款分割, 其他条款在法律允许的范围内继续完全有效。
          </dd>
        </dl>
        <dl>
          <dt>适用法律和管辖</dt>
          <dd>
            亚博拥有MGA、英国GC监督委员会Gambling
            Commission和菲律宾政府PAGCOR颁发的合法执照。注册于英属维尔京群岛，是受国际认可的合法游戏公司。
          </dd>
          <dd>因本条规发生或与本条规有关的任何争议:</dd>
          <dd>
            <p>1. 若由用户提起, 则提交MGA最终解决。</p>
            <p>2. 若由亚博提起, 则由亚博自行选择:</p>
            <p>a. 根据以上规定提请仲裁最终解决。</p>
            <p>b. 向用户同意的菲律宾法院提起诉讼或申请, 但亚博在其他法律管辖区提起诉讼或法律程序的权利不受影响。</p>
          </dd>
        </dl>
      </>
    )
  }

  //隱私政策
  const privacyTemplate = () => {
    return (
      <>
        <dl>
          <dd>
            1.
            亚博十分尊重及重视会员的私隐权，我们将竭力保证您的信息与数据安全，让客户无后顾之忧，这是我们一直遵循的隐私权政策宗旨。
          </dd>
          <dd>
            2.
            亚博绝不会透露任何能识别个人身份的资料给任何第三方，除非收到法庭传票或应可行法律的要求及判决。我们有权通过网站向有关付款平台服务提供商以及金融保险机构提供必要的个人信息以完成付款要求。
          </dd>
          <dd>
            3.
            会员提供的所有个人信息，其传送均通过128位SSL加密的安全端口，并存放在普通公众无法进入的保密环境之中。所有数据的内部出入将受到严格限制和严密监控。
          </dd>
          <dd>以下为我们关于客户个人信息隐私权保护规则的内容：</dd>
        </dl>
        <dl>
          <dt>简介</dt>
          <dd>
            网站服务由亚博提供。为了让客户在这能享受到安全愉悦的服务体验，我们征求客户仔细阅读此“隐私政策”，这将涉及到我们使用您个人信息的相关事项。对待客户的个人隐私，本公司本着严谨的态度。
          </dd>
          <dd>
            为了让客户享受进一步服务，有时我们可能需要客户提供个人信息。本政策将会涵盖相关客户个人信息的使用事项，同时也涉及相关信息的记录程序。有时，客户接受进一步服务前，可能需要客户提供个人信息（如：姓名，通信地址，邮箱地址，会员编号，电话或手机号码，出生日期或支付信息），任何情况下，我们都将对照此政策来处理您的个人信息。在使用您的个人信息时我们将适用现行的法律条款，并竭力采取最佳最稳妥的方式处理。
          </dd>
          <dd>
            同时，我们也将监控您在本网站的活动内容，可能包括您的访问量，访问页面，网络服务的原始域名等，这将有助于我们建立客户个人文件数据。其中部分资料将被聚合统计，意旨我们将不能对其单独进行检验。
          </dd>
        </dl>
        <dl>
          <dt>目的</dt>
          <dd>
            客户在亚博开户时，我们将要求您提供某些个人信息，如：姓名，通信地址，邮箱地址，密码及确认您是否已年满18周岁（OPE只接收达到法定年龄18周岁或以上的客户）。我们可能需使用您的个人信息用来确认您的各种金融交易，定期发送公司实时简讯，提供客服支持及完善全面的游戏服务给您。如果您想中止接收公司实时简讯，您可根据提示在简讯接收选项做出相关选择。另须注意，您注册的姓名必须是您本人姓名，您所注册的数据为真实有效数据，因为这将用于随后的交易验证及前述的其它用途。
          </dd>
        </dl>
        <dl>
          <dt>访问信息</dt>
          <dd>
            在阁下访问我们网站页面的过程中，将会有个小的文本夹“信息记录程序”存储在您的计算机。很多网站都有类似设置，因为此设置对网站发行商是非常有用的，譬如可以记录该计算机（或用户）是否曾浏览过此网站。
            亚博将会对客户“信息记录程序”及IP地址进行存储记录，这些数据将有助于我们完善和提高我们的服务，并有助于我们分析客户的完整信息。这类数据并不是用于客户个人信息的创建文件，因此将被定期清除。
          </dd>
        </dl>
        <dl>
          <dt>机密性</dt>
          <dd>
            亚博将尽全力保护客户提供给我们的个人资料，不会蓄意将该数据泄漏给外人，除非此政策条款里有明文规定。所有亚博员工都被要求遵循该政策条款。员工有义务严密的保守客户的个人信息，即使员工离开亚博后仍须坚守此义务。阁下本人也须保护好您的个人信息。阁下应严守您的帐户密码，不应将此透露给其他人。
          </dd>
        </dl>
        <dl>
          <dt>客户信息的接收者</dt>
          <dd>
            除了上述法定要求说明，我们还可能将您的个人信息透露给我们的工作人员，其他相关公司的工作人员或亚博的合作伙伴和为亚博客户提供相关服务给我们的第三方网络服务供货商（包含但不局限于安全，信用和风险审核机构）。第三方网络服务供货商可以检查我们提供在公共数据库或私人数据库的任何详细数据及有机会获得和保留检查记录。我们同样可以通过第三方网络服务供货商得到您的个人信息。如果您提供您的个人资料给我们或我们从第三方网络服务供货商中收到您的个人资料，代表您已经同意我们可以处理、使用、记录和透露您的个人信息。我们保留权利，根据您或第三方网络服务供货商提供的信息，在任何时候冻结或关闭您的亚博会员账户。
          </dd>
        </dl>
        <dl>
          <dt>监控</dt>
          <dd>
            出于服务质保，防止诈骗和法规遵循方面的原因，我们将对客户的通信记录进行保存和监控（如：电话和邮件记录）。客户有权要求我们勿将其个人信息直接用于市场推销。如果您想行使此权利，客户应准备以下；书面提交申请提供可以证明您身份的信息（如：账号，用户名，注册信息）写明个人信息哪里不正确及需修正的内容。隐私权保护规则的认同一旦客户在亚博注册开户就代表您认同此隐私权保护规则条款。我们将定期更新此政策条款，因此我们建议客户您也定期进行查阅。如果我们对该政策有所更改，我们将在相关网页上发布消息。政策更改后，客户持续使用亚博网站将被视为客户认同该政策的更改。如果客户不接受此政策的更改，您可以选择停用我们的网站服务。如果该政策条款与其它局部特殊条款产生分歧，将适用局部特殊条款。
          </dd>
        </dl>
      </>
    )
  }

  // 關閉條款彈窗
  const handleCloseTerms = () => setTerms({ enabled: false, title: '', type: '' })

  if (terms) {
    const { enabled, title, type } = terms
    if (enabled) {
      return (
        <StyleTerms>
          <div className='title'>
            {title}
            <button onClick={handleCloseTerms} className='close' />
          </div>
          <div className='content'>{type === 'terms' ? termsTemplate() : privacyTemplate()}</div>
        </StyleTerms>
      )
    } else {
      return null
    }
  } else {
    return null
  }
}
export default Terms
