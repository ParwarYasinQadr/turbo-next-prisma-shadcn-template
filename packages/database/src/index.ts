// this internal package is Just-in-Time Packages it since our app is nextjs it used bundler 

export { prisma } from './client' // exports instance of prisma
export * from "../generated/prisma/client" // exports generated types from prisma