import Link from "next/link";

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Galerija",
            path: "/galerija",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    return (
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links