import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <>
    <section className="landing">
      <div className="dark-overlay">
        <div className="container-left">
          <div className="landing-inner">
            <h1 className="x-large">Service providers</h1>
            <p className="lead">
             Welcome to the service.
            </p>
            </div>
            <div className="landing-inner-right">
              <img src="/welcome.jpg" className="img"></img>
            </div>
        </div>
      </div>
    </section>
      </>
  );
}
