export default function Footer(){
    return(
        <footer className="flex items-center justify-between px-10 text-footer-text relative z-0 h-20 border-t-1 border-footer-text">
            <p className="font-bold text-2xl uppercase">tuka</p>
            <p>© 2026 Tuka. All rights reserved.</p>
            <div>
                <button>Privacy</button>
                <button>Terms</button>
                <button>Contact</button>
            </div>
        </footer>
    );
}