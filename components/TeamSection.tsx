"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Twitter, Github, X } from "lucide-react";
import { teamData } from "@/data/team";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [selectedMember, setSelectedMember] = useState<
    (typeof teamData)[0] | null
  >(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [
          number,
          number,
          number,
          number
        ],
      },
    },
  };

  const handleMemberClick = (
    member: (typeof teamData)[0]
  ) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-16 md:py-20 section-light transition-colors duration-300">
      {/* Team Container - Medium Layout with consistent spacing */}
      <div className="w-full max-w-[min(90vw,85rem)] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-purple-primary text-xs sm:text-sm font-medium backdrop-blur-sm mb-6"
          >
            Meet Our Team
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-professional mb-4 md:mb-6">
            Our people make us great
            <span className="text-purple-primary">.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-professional max-w-4xl mx-auto mb-8 leading-relaxed">
            Meet the talented individuals who bring
            creativity, expertise, and passion to every
            project we deliver.
          </p>
        </motion.div>

        {/* Team Grid - Equal Height & Width Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
            >
              <Card
                className="card-professional min-h-[320px] rounded-2xl h-full hover:border-purple-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden bg-gradient-to-br from-gray-50/50 to-purple-50/30 dark:from-gray-900/50 dark:to-purple-900/20 backdrop-blur-sm border border-gray-200/50 dark:border-purple-800/30"
                onClick={() => handleMemberClick(member)}
              >
                <CardContent className="p-0 h-full flex flex-col items-center justify-center">
                  {/* Avatar Section - Fixed Height */}
                  <div className="relative p-4 sm:p-6 pb-3 text-center flex-shrink-0">
                    <div className="relative inline-block">
                      <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto ring-4 ring-purple-primary/30 group-hover:ring-purple-primary/50 transition-all duration-300 shadow-lg">
                        <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 text-white text-sm sm:text-base md:text-lg font-bold">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>

                      {/* Online Status Indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 border-2 sm:border-3 border-background rounded-full shadow-lg"></div>
                    </div>
                  </div>

                  {/* Content Section - Flexible Height */}
                  <div className="px-3 sm:px-4 md:px-6 pb-4 sm:pb-6 text-center space-y-2 sm:space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-professional mb-1 group-hover:text-purple-primary transition-colors duration-300 line-clamp-1">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-professional font-medium line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                          {member.position}
                        </p>
                      </div>

                      <p className="text-xs text-muted-professional leading-relaxed line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
                        {member.bio}
                      </p>
                    </div>

                    {/* Skills Preview - Fixed Height */}
                    {/* <div className="flex flex-wrap justify-center gap-1 pt-2 min-h-[1.5rem]">
                      {member.skills
                        ?.slice(0, 2)
                        .map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-purple-600/15 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 hover:bg-purple-600/25 dark:hover:bg-purple-500/30 border border-purple-600/25 dark:border-purple-500/30 text-xs px-2 py-0.5"
                          >
                            {skill}
                          </Badge>
                        ))}
                      {member.skills &&
                        member.skills.length > 2 && (
                          <Badge
                            variant="secondary"
                            className="bg-gray-600/15 dark:bg-gray-500/20 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 border border-gray-600/25 dark:border-gray-500/30"
                          >
                            +{member.skills.length - 2}
                          </Badge>
                        )}
                    </div> */}

                    {/* Social Links Preview - Fixed Height */}
                    <div className="flex justify-center space-x-2 pt-2 min-h-[2rem]">
                      {member.social.linkedin && (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600/15 dark:bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-600/25 dark:hover:bg-purple-500/30 transition-colors border border-purple-600/25 dark:border-purple-500/30">
                          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                      )}
                      {member.social.twitter && (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600/15 dark:bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-600/25 dark:hover:bg-purple-500/30 transition-colors border border-purple-600/25 dark:border-purple-500/30">
                          <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                      )}
                      {member.social.github && (
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600/15 dark:bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-600/25 dark:hover:bg-purple-500/30 transition-colors border border-purple-600/25 dark:border-purple-500/30">
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                      )}
                    </div>

                    {/* View Profile Button - Fixed Height */}
                    {/* <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 min-h-[2.5rem] flex items-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-purple-600/40 dark:border-purple-500/40 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 bg-transparent text-xs sm:text-sm py-1.5 sm:py-2"
                      >
                        View Profile
                        <ArrowRight className="w-3 h-3 ml-1.5" />
                      </Button>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Team Member Detail Modal */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={closeModal}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl [&>button]:hidden overflow-hidden">
          {selectedMember && (
            <>
              <DialogHeader className="border-b border-border/50 pb-6">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-4">
                    <Avatar className="w-16 h-16 ring-4 ring-purple-primary/30 shadow-lg">
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 text-white text-xl font-bold">
                        {selectedMember.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-2xl font-bold">
                        {selectedMember.name}
                      </div>
                      <div className="text-base text-muted-foreground font-normal">
                        {selectedMember.position}
                      </div>
                    </div>
                  </DialogTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeModal}
                    className="h-10 w-10 p-0 hover:bg-muted rounded-xl"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </DialogHeader>

              <div
                className="space-y-6 pt-6 overflow-y-auto scrollbar-hide"
                style={{ maxHeight: "calc(90vh - 140px)" }}
              >
                {/* Bio Section */}
                <Card className="bg-gradient-to-br from-gray-50/50 to-purple-50/30 dark:from-gray-900/50 dark:to-purple-900/20 backdrop-blur-sm border border-gray-200/50 dark:border-purple-800/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-lg">
                      <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
                      About{" "}
                      {selectedMember.name.split(" ")[0]}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </CardContent>
                </Card>

                {/* Skills & Expertise */}
                <Card className="bg-gradient-to-br from-gray-50/50 to-purple-50/30 dark:from-gray-900/50 dark:to-purple-900/20 backdrop-blur-sm border border-gray-200/50 dark:border-purple-800/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-lg">
                      <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
                      Skills & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills?.map(
                        (skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-purple-600/15 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 hover:bg-purple-600/25 dark:hover:bg-purple-500/30 border border-purple-600/25 dark:border-purple-500/30 px-3 py-1"
                          >
                            {skill}
                          </Badge>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Connect Section */}
                <Card className="bg-gradient-to-br from-gray-50/50 to-purple-50/30 dark:from-gray-900/50 dark:to-purple-900/20 backdrop-blur-sm border border-gray-200/50 dark:border-purple-800/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-lg">
                      <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
                      Connect with{" "}
                      {selectedMember.name.split(" ")[0]}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedMember.social.linkedin && (
                        <Button
                          variant="outline"
                          asChild
                          className="justify-start hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white hover:border-purple-600 dark:hover:border-purple-500 transition-all duration-300 bg-transparent border-purple-600/40 dark:border-purple-500/40 text-purple-600 dark:text-purple-400"
                        >
                          <a
                            href={
                              selectedMember.social.linkedin
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                          >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn Profile
                          </a>
                        </Button>
                      )}
                      {selectedMember.social.twitter && (
                        <Button
                          variant="outline"
                          asChild
                          className="justify-start hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white hover:border-purple-600 dark:hover:border-purple-500 transition-all duration-300 bg-transparent border-purple-600/40 dark:border-purple-500/40 text-purple-600 dark:text-purple-400"
                        >
                          <a
                            href={
                              selectedMember.social.twitter
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                          >
                            <Twitter className="w-5 h-5" />
                            Twitter Profile
                          </a>
                        </Button>
                      )}
                      {selectedMember.social.github && (
                        <Button
                          variant="outline"
                          asChild
                          className="justify-start hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white hover:border-purple-600 dark:hover:border-purple-500 transition-all duration-300 bg-transparent border-purple-600/40 dark:border-purple-500/40 text-purple-600 dark:text-purple-400"
                        >
                          <a
                            href={
                              selectedMember.social.github
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                          >
                            <Github className="w-5 h-5" />
                            GitHub Profile
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                .line-clamp-1 {
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }
                .line-clamp-2 {
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }
              `}</style>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
