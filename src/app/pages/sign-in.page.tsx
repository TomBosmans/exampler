import HTML from "../html"
import Button from "./_components/button"
import Input from "./_components/input"
import Link from "./_components/link"

export default function SignInPage() {
  return (
    <HTML title="Sign in">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            class="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" hx-post="/sign-in">
            <div>
              <label for="email" class="block text-sm font-medium leading-6">
                Email address
              </label>
              <div class="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required="true"
                  class="w-full"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6"
                >
                  Password
                </label>
                <div class="text-sm">
                  <Link href="#" variant="hover">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div class="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required="true"
                  class="w-full"
                />
              </div>
            </div>

            <div>
              <Button type="submit" class="w-full">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </HTML>
  )
}
